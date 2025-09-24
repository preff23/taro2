export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { theme, deckId, layout, positions, seed } = req.body;
    
    if (!theme || !layout) {
      return res.status(400).json({
        ok: false,
        data: null,
        error: 'theme and layout are required'
      });
    }

    // Mock tarot cards data
    const tarotCards = [
      { id: 'I', name: 'The Magician', upright: true },
      { id: 'II', name: 'The High Priestess', upright: false },
      { id: 'III', name: 'The Empress', upright: true },
      { id: 'IV', name: 'The Emperor', upright: true },
      { id: 'V', name: 'The Hierophant', upright: false },
      { id: 'VI', name: 'The Lovers', upright: true },
      { id: 'VII', name: 'The Chariot', upright: true },
      { id: 'VIII', name: 'Strength', upright: false },
      { id: 'IX', name: 'The Hermit', upright: true },
      { id: 'X', name: 'Wheel of Fortune', upright: true }
    ];

    // Generate random cards based on layout
    const cardCount = layout === '1' ? 1 : layout === '3' ? 3 : layout === '5' ? 5 : positions?.length || 3;
    const selectedCards = [];
    
    for (let i = 0; i < cardCount; i++) {
      const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      selectedCards.push({
        ...randomCard,
        position: positions?.[i] || `Position ${i + 1}`,
        index: i
      });
    }

    const mockReading = {
      id: 'reading_' + Date.now(),
      userId: 'demo_user_123',
      theme,
      deckId: deckId || 'classic',
      layout,
      positions: positions || selectedCards.map(card => card.position),
      cards: selectedCards,
      seed: seed || Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
      interpretation: {
        id: 'interpretation_' + Date.now(),
        readingId: 'reading_' + Date.now(),
        model: 'gpt-4',
        tone: 'supportive',
        summary: 'This reading reveals important insights about your current situation...',
        fullText: 'The cards drawn suggest a period of transformation and growth. The Magician indicates you have the power to manifest your desires, while the High Priestess reversed suggests you may need to trust your intuition more deeply...',
        createdAt: new Date().toISOString()
      }
    };

    res.status(200).json({
      ok: true,
      data: mockReading,
      error: null
    });

  } catch (error) {
    console.error('Reading creation error:', error);
    res.status(500).json({
      ok: false,
      data: null,
      error: 'Internal server error'
    });
  }
}
