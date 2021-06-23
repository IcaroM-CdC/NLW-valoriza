import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624386198166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid", //ID universal (Universal Unique IDentifier)
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name:"updatedAt",
                        type: "timestamp",
                        default: "now()"
                    }

                ]
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.dropTable("users")
        
    }

}
