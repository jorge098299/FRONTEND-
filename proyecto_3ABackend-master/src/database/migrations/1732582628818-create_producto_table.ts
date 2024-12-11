import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductoTable1732582628818 implements MigrationInterface {
    name = 'CreateProductoTable1732582628818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persona" RENAME COLUMN "apellidos" TO "apellios"`);
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "precio" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "descripcion" character varying NOT NULL, "estado" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos" ADD CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productos" DROP CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "productos"`);
        await queryRunner.query(`ALTER TABLE "persona" RENAME COLUMN "apellios" TO "apellidos"`);
    }

}
