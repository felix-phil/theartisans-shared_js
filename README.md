# For the artisans inc.

```bash
$ yarn add @theartisans/shared
```

```typescript
import express, { Request, Response } from "express";
import { BadRequestError, requireAuth } from "@theartisans/shared/build";

const router = express.Router();
router.push("/new", (req: Request, res: Response) => {
  throw new BadRequestError();
});
```
