import readYamlFile from "read-yaml-file/index"
import path from "path"

export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  }

  personal?: {
    name?: string;
    avatar?: string;
    socialNetworks?: {
      github?: string;
      linkedin?: string;
    }
  }
}

export async function withTemplateConfig(props = {}) {

  const PATH_TEAMPLATE_CONFIG = path.resolve(".", "teamplate-config.yml");
  const teamplateConfig = await readYamlFile<TemplateConfig>(PATH_TEAMPLATE_CONFIG);
  
  return {
    teamplateConfig,  
    ...props,
  }
}
