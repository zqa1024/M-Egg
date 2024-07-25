import { App, Init } from '@midwayjs/core';
import { Application } from 'egg';
import { promisify } from 'util';
import { readFile, writeFile } from 'fs';

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// const t = ['apple', 'banana', 'orange'] as const;
// type Arr = (typeof t)[number];

// @Autoload()
// @Scope(ScopeEnum.Singleton)
export class getPrismaModels {
  modelNames: string[];
  @App()
  app: Application;

  @Init()
  async init() {
    try {
      // 读取 schema.prisma 文件
      const data = await readFileAsync(
        this.app.getAppDir() + '/prisma/schema.prisma',
        'utf8'
      );

      // 使用正则表达式匹配模型名称
      this.modelNames =
        data.match(/model\s+\w+/g)?.map(model => model.split(' ')[1]) || [];
      console.log('prisma modelNames', this.modelNames);
      this.app.setAttr('prismaModels', this.modelNames);
      this.saveModelNames(this.modelNames);
      return this.modelNames;
    } catch (error) {
      console.error('Error reading Prisma schema file:', error);
      return [];
    }
  }
  getModelNames() {
    return this.modelNames;
  }

  async saveModelNames(modelNames: string[]) {
    try {
      const content = `export const modelNames = [${modelNames
        .map(model => `'${model}'`)
        .join(', ')}];`;
      await writeFileAsync(
        this.app.getAppDir() + '/src/script/models.ts',
        content,
        'utf8'
      );
      console.log('Prisma models file written successfully.');
    } catch (error) {
      console.error('Error writing Prisma models file:', error);
    }
  }
}
