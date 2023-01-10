import { Pool } from "pg";
import  dotenv from "dotenv"
dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE || "postgres://postgres:akmal@localhost/market"
})

class PG {
    private pool = pool

    async fetchAll (SQL: string, ...params: (string | number | boolean)[]) {
        const client = await this.pool.connect()
        try {
            const { rows } = await client.query(SQL, params)
            return rows
        } catch (error) {
            console.log(error)
            throw new ErrorHandle('Bazada bunday malumot yoq', 401)
        } finally {
            await client.release()
        }
    }

    async fetchOne (SQL: string, ...params: (string | number | boolean)[]) {
        const client = await this.pool.connect()
        try {
            const { rows } = await client.query(SQL, params)
            return rows
        } catch (error) {
            console.log(error)
            throw new ErrorHandle('Bazada bunday malumot yoq', 401)
        } finally {
            await client.release()
        }
    }
}

export default new PG()