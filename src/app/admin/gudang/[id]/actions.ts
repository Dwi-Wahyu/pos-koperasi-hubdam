"use server";

import { PrismaClientKnownRequestError } from "@/app/generated/prisma/runtime/library";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";
import { revalidatePath } from "next/cache";
import { InputProductSchemaType, UpdateProductSchemaType } from "./schema";
import { unlinkSync } from "fs";
import { join } from "path";
