import { ICommand } from '../../interface';

/**
 * execute가 되도 아무것도 하지 않는 객체 (빈슬롯에 사용하자)
 */
class NoCommand implements ICommand {
  execute(): string {
    return '';
  }
  undo(): string {
    return '';
  }
}

export default NoCommand;
