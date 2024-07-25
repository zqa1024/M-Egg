import { ApiProperty, ApiPropertyOptional } from '@midwayjs/swagger';

export class records {
  @ApiProperty({ type: Number })
  id: number;

  @ApiPropertyOptional({ type: Number })
  authorId?: number;

  @ApiProperty({ type: Date })
  createAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ isArray: true, type: Object })
  events: object[] = [];
}
