// Migration gerada com "yarn typeorm migration:create -n create_orphanages"
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1603005025729 implements MigrationInterface {

  // para rodar a migration: "yarn typeorm migration:run"
  public async up (queryRunner: QueryRunner): Promise<void> {
    // Cria uma tabela e suas colunas
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        }
      ]
    }))
  }

  // Para reverter a migration: "yarn typeorm migration:revert"
  public async down (queryRunner: QueryRunner): Promise<void> {
    // Destroi a tabela
    await queryRunner.dropTable('orphanages');
  }

}
