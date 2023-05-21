import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = process.env.PORT || 4000;

const hnadleListening = () =>
  console.log(`✅✅❤Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, hnadleListening);
