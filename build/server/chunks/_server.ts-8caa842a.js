function GET() {
  return new Response(
    JSON.stringify({
      "female": 8356,
      "male": 23645,
      "unknown": 1172
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
}

export { GET };
//# sourceMappingURL=_server.ts-8caa842a.js.map
