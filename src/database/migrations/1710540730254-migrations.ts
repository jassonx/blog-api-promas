import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1710540730254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
          },
          {
            name: 'userId',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'content',
            type: 'varchar',
            length: '350',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['userId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE users CASCADE');
  }
}
