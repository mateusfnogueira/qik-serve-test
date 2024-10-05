import { useEffect, useState } from "react";
import { IConfig } from "../interfaces/config.interface";

export default function useConfigHook() {
  const [config, setConfig] = useState<IConfig | null>(null);
  const [error, setError] = useState("");

  async function fetchConfig() {
    const res = await fetch("/api/venue");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const configData = await fetchConfig();
        setConfig(configData.data);
      } catch {
        setError("Failed to fetch data");
      }
    }
    fetchData();
  }, []);

  return { config, error };
}
