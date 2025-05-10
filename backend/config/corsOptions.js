const allowedOrigins = [
  'https://tasky-pingu.vercel.app',
  'http://localhost:3000',
  'https://tasky-pingu-2achy0d4m-samar-ayadis-projects.vercel.app'
];

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
