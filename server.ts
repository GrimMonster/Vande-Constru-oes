import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Enable CORS headers to allow iframe preview & external cross-origin requests without 403
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  // API Route for AI Concept & Brief Feasibility
  app.post("/api/ai-architect-brief", async (req, res) => {
    try {
      const { projectType, areaM2, location, stylePreference, visionDescription } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback intelligent brief generation if API Key is not set yet
        return res.json({
          brief: {
            title: `Parecer Técnico Vande: ${stylePreference || 'Engenharia de Alto Padrão'}`,
            estimatedInvestment: `R$ ${(areaM2 * 5800).toLocaleString('pt-BR')} - R$ ${(areaM2 * 8200).toLocaleString('pt-BR')}`,
            structuralHighlight: "Estrutura dimensionada em concreto armado e protendido com rigorosas análises de carga e conformidade NBR.",
            sustainabilityFactor: "Eficiência energética avançada, reaproveitamento hídrico e gestão sustentável de resíduos no canteiro.",
            executionTimeline: "12 a 16 meses (Execução de Obras Turnkey Vande)",
            recommendedMaterials: ["Concreto de Alta Desempenho (HPC)", "Esquadrias de Alumínio de Alta Vedação", "Porcelanatos de Grandes Formatos", "Sistemas Fotovoltaicos Integrados"],
            curatorMessage: "O conceito apresentado possui excelente viabilidade executiva para o padrão de qualidade Vande Construções. Nossa equipe técnica de engenharia está pronta para elaborar o orçamentário analítico e o planejamento executivo da sua obra."
          }
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Você é o Engenheiro-Chefe e Diretor de Obras da "Vande Construções", uma conceituada empresa brasileira de engenharia e construção civil de alto padrão.
Elabore um parecer técnico e orçamentário prévio (em português) para um cliente interessado nos serviços da Vande Construções com os seguintes dados:
- Tipo de Projeto: ${projectType || 'Obra Residencial / Corporativa'}
- Área Construída: ${areaM2 || 600} m²
- Localização/Terreno: ${location || 'São Paulo / Região'}
- Estilo / Padrão Desejado: ${stylePreference || 'Contemporâneo de Alto Padrão'}
- Visão do Cliente: ${visionDescription || 'Construção moderna, acabamento impecável, pontualidade de entrega e máxima eficiência de custos.'}

Responda ESTRITAMENTE em formato JSON válido com as seguintes chaves:
{
  "title": "string (ex: Parecer Técnico Vande: Residência de Alto Padrão)",
  "estimatedInvestment": "string (ex: R$ 3.500.000 - R$ 4.800.000)",
  "structuralHighlight": "string (descreva a solução de engenharia e fundação recomendada em 2 frases objetivas e seguras)",
  "sustainabilityFactor": "string (descreva diferenciais sustentáveis e eficiência de obra em 1-2 frases)",
  "executionTimeline": "string (ex: 14 meses para entrega completa da chave na mão)",
  "recommendedMaterials": ["material 1", "material 2", "material 3", "material 4"],
  "curatorMessage": "string (mensagem da diretoria da Vande Construções convidando para apresentação do projeto e cronograma executivo)"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const responseText = response.text || "{}";
      const parsedData = JSON.parse(responseText);

      return res.json({ brief: parsedData });

    } catch (err: any) {
      console.error("AI Architect Brief Error:", err);
      // Return clear fallback on error
      return res.status(500).json({
        error: "Não foi possível gerar a diretriz via IA no momento.",
        details: err?.message
      });
    }
  });

  // Healthcheck endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", company: "Vande Construções" });
  });

  // Vite integration in development, static serve in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Vande Construções Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
