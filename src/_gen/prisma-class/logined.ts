import { ApiProperty, ApiPropertyOptional } from '@midwayjs/swagger';

export class logined {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  userId: number;

  @ApiPropertyOptional({ type: String })
  sessionId?: string;

  @ApiProperty({ type: Boolean })
  isLogined: boolean;

  @ApiProperty({ type: Date })
  createAt: Date;

  @ApiPropertyOptional({ type: String })
  token?: string;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
