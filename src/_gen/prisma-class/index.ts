import { chat as _chat } from './chat';
import { user as _user } from './user';
import { post as _post } from './post';
import { logined as _logined } from './logined';
import { records as _records } from './records';
import { user2 as _user2 } from './user2';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PrismaModel {
  export class chat extends _chat {}
  export class user extends _user {}
  export class post extends _post {}
  export class logined extends _logined {}
  export class records extends _records {}
  export class user2 extends _user2 {}

  export const extraModels = [chat, user, post, logined, records, user2];
}
