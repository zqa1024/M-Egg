import { post } from './post';
import { ApiProperty, ApiPropertyOptional } from '@midwayjs/swagger';

export class user {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  email: string;

  @ApiPropertyOptional({ type: String })
  password?: string;

  @ApiPropertyOptional({ type: String })
  name?: string;

  @ApiPropertyOptional({ type: Number })
  loginedId?: number;

  @ApiProperty({ type: Date })
  createAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ isArray: true, type: () => post })
  posts: post[];
}
