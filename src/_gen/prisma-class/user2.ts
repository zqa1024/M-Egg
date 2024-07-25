import { ApiProperty, ApiPropertyOptional } from '@midwayjs/swagger';

export class user2 {
  @ApiProperty({ type: Number })
  id: number;

  @ApiPropertyOptional({ type: String })
  email?: string;

  @ApiProperty({ type: String })
  passWord: string;

  @ApiProperty({ type: String })
  userName: string;

  @ApiProperty({ type: Date })
  createAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
