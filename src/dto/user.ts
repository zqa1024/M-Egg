import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {
  @Rule(RuleType.string())
  id: string;

  @Rule(RuleType.string().required())
  email: string;

  @Rule(RuleType.string().required())
  name: string;

  @Rule(RuleType.array().items(RuleType.string()))
  posts: string[];

  // id    String  @id @default(auto()) @map("_id") @db.ObjectId
  // email String  @unique
  // name  String?
  // posts Post[]
}

export class LoginDTO {
  @Rule(RuleType.string().email())
  email: string;

  @Rule(RuleType.string().required())
  password: string;

  // id    String  @id @default(auto()) @map("_id") @db.ObjectId
  // email String  @unique
  // name  String?
  // posts Post[]
  @Rule(RuleType.string().required())
  username: string;

  @Rule(RuleType.string())
  type: string;

  @Rule(RuleType.boolean())
  autoLogin: boolean;

  @Rule(RuleType.string())
  captche_id: string;

  @Rule(RuleType.string())
  answer: string;
}

export class NewUserDTO {
  @Rule(RuleType.string().required())
  userName: string;

  @Rule(RuleType.string().required())
  passWord: string;

  @Rule(RuleType.string().email().allow(''))
  email: string;
}
