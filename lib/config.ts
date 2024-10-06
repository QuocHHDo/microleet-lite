interface Config {
  backendUrl: string;
}

const config: Config = {
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || '',
};

export default config;
