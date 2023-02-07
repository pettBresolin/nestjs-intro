import { UnprocessableEntityException } from "@nestjs/common";


export function handleError(err: Error): undefined {
    const errorLines = err.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    if (!lastErrorLine) {
      console.error(err);
    }
    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação',
    );
  }