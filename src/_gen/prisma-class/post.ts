import { user } from './user';
import { ApiProperty, ApiPropertyOptional } from '@midwayjs/swagger';

export class post {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Date })
  createAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: String })
  title: string;

  @ApiPropertyOptional({ type: String })
  content?: string;

  @ApiProperty({ type: Boolean })
  published: boolean;

  @ApiProperty({ type: Number })
  viewCount: number;

  @ApiPropertyOptional({ type: Number })
  authorId?: number;

  @ApiPropertyOptional({ type: () => user })
  author?: user;
}
