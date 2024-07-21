// node_modules: source thư viện
// package.json: chứa tên và version của thư viện => yarn init => enter tới chết...
// yarn add express
import express from 'express'
import cors from 'cors'
import { rootRouter } from './routes/root.router.js';

const app = express();
// khai báo middleware
app.use(express.json())

// yarn add cors
app.use(cors()) //  cho phép tất cả domain truy cập

// localhost:8080
// hàm khởi tạo server với port tự định nghĩa
app.use(rootRouter)

app.listen(8080)

