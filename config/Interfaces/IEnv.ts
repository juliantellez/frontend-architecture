interface IEnv {
  analyze: boolean;
  NODE_ENV: "development" | "production" | "none" | undefined;
}

export default IEnv;
