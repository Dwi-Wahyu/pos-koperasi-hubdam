
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model audit
 * 
 */
export type audit = $Result.DefaultSelection<Prisma.$auditPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model preorder
 * 
 */
export type preorder = $Result.DefaultSelection<Prisma.$preorderPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model product_variant
 * 
 */
export type product_variant = $Result.DefaultSelection<Prisma.$product_variantPayload>
/**
 * Model product_option
 * 
 */
export type product_option = $Result.DefaultSelection<Prisma.$product_optionPayload>
/**
 * Model product_history
 * 
 */
export type product_history = $Result.DefaultSelection<Prisma.$product_historyPayload>
/**
 * Model setting
 * 
 */
export type setting = $Result.DefaultSelection<Prisma.$settingPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model transaction_item
 * 
 */
export type transaction_item = $Result.DefaultSelection<Prisma.$transaction_itemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const product_history_change_type: {
  IN: 'IN',
  OUT: 'OUT',
  ADJUSTMENT: 'ADJUSTMENT'
};

export type product_history_change_type = (typeof product_history_change_type)[keyof typeof product_history_change_type]


export const transaction_status: {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  CANCELLED: 'CANCELLED'
};

export type transaction_status = (typeof transaction_status)[keyof typeof transaction_status]


export const preorder_status: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type preorder_status = (typeof preorder_status)[keyof typeof preorder_status]


export const user_role: {
  ADMIN: 'ADMIN',
  CASHIER: 'CASHIER',
  CUSTOMER: 'CUSTOMER'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type product_history_change_type = $Enums.product_history_change_type

export const product_history_change_type: typeof $Enums.product_history_change_type

export type transaction_status = $Enums.transaction_status

export const transaction_status: typeof $Enums.transaction_status

export type preorder_status = $Enums.preorder_status

export const preorder_status: typeof $Enums.preorder_status

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit`: Exposes CRUD operations for the **audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audit.findMany()
    * ```
    */
  get audit(): Prisma.auditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preorder`: Exposes CRUD operations for the **preorder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preorders
    * const preorders = await prisma.preorder.findMany()
    * ```
    */
  get preorder(): Prisma.preorderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_variant`: Exposes CRUD operations for the **product_variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_variants
    * const product_variants = await prisma.product_variant.findMany()
    * ```
    */
  get product_variant(): Prisma.product_variantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_option`: Exposes CRUD operations for the **product_option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_options
    * const product_options = await prisma.product_option.findMany()
    * ```
    */
  get product_option(): Prisma.product_optionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_history`: Exposes CRUD operations for the **product_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_histories
    * const product_histories = await prisma.product_history.findMany()
    * ```
    */
  get product_history(): Prisma.product_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.settingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_item`: Exposes CRUD operations for the **transaction_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_items
    * const transaction_items = await prisma.transaction_item.findMany()
    * ```
    */
  get transaction_item(): Prisma.transaction_itemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    audit: 'audit',
    category: 'category',
    inventory: 'inventory',
    preorder: 'preorder',
    product: 'product',
    product_variant: 'product_variant',
    product_option: 'product_option',
    product_history: 'product_history',
    setting: 'setting',
    transaction: 'transaction',
    transaction_item: 'transaction_item'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "audit" | "category" | "inventory" | "preorder" | "product" | "product_variant" | "product_option" | "product_history" | "setting" | "transaction" | "transaction_item"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      audit: {
        payload: Prisma.$auditPayload<ExtArgs>
        fields: Prisma.auditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          findFirst: {
            args: Prisma.auditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          findMany: {
            args: Prisma.auditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>[]
          }
          create: {
            args: Prisma.auditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          createMany: {
            args: Prisma.auditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.auditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          update: {
            args: Prisma.auditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          deleteMany: {
            args: Prisma.auditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.auditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditPayload>
          }
          aggregate: {
            args: Prisma.AuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit>
          }
          groupBy: {
            args: Prisma.auditGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.auditCountArgs<ExtArgs>
            result: $Utils.Optional<AuditCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      preorder: {
        payload: Prisma.$preorderPayload<ExtArgs>
        fields: Prisma.preorderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preorderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preorderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          findFirst: {
            args: Prisma.preorderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preorderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          findMany: {
            args: Prisma.preorderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>[]
          }
          create: {
            args: Prisma.preorderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          createMany: {
            args: Prisma.preorderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.preorderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          update: {
            args: Prisma.preorderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          deleteMany: {
            args: Prisma.preorderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preorderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.preorderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          aggregate: {
            args: Prisma.PreorderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreorder>
          }
          groupBy: {
            args: Prisma.preorderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreorderGroupByOutputType>[]
          }
          count: {
            args: Prisma.preorderCountArgs<ExtArgs>
            result: $Utils.Optional<PreorderCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      product_variant: {
        payload: Prisma.$product_variantPayload<ExtArgs>
        fields: Prisma.product_variantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_variantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_variantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload>
          }
          findFirst: {
            args: Prisma.product_variantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_variantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload>
          }
          findMany: {
            args: Prisma.product_variantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload>[]
          }
          create: {
            args: Prisma.product_variantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload>
          }
          createMany: {
            args: Prisma.product_variantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.product_variantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload>
          }
          update: {
            args: Prisma.product_variantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload>
          }
          deleteMany: {
            args: Prisma.product_variantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_variantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_variantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantPayload>
          }
          aggregate: {
            args: Prisma.Product_variantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_variant>
          }
          groupBy: {
            args: Prisma.product_variantGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_variantGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_variantCountArgs<ExtArgs>
            result: $Utils.Optional<Product_variantCountAggregateOutputType> | number
          }
        }
      }
      product_option: {
        payload: Prisma.$product_optionPayload<ExtArgs>
        fields: Prisma.product_optionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_optionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_optionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload>
          }
          findFirst: {
            args: Prisma.product_optionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_optionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload>
          }
          findMany: {
            args: Prisma.product_optionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload>[]
          }
          create: {
            args: Prisma.product_optionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload>
          }
          createMany: {
            args: Prisma.product_optionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.product_optionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload>
          }
          update: {
            args: Prisma.product_optionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload>
          }
          deleteMany: {
            args: Prisma.product_optionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_optionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_optionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_optionPayload>
          }
          aggregate: {
            args: Prisma.Product_optionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_option>
          }
          groupBy: {
            args: Prisma.product_optionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_optionGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_optionCountArgs<ExtArgs>
            result: $Utils.Optional<Product_optionCountAggregateOutputType> | number
          }
        }
      }
      product_history: {
        payload: Prisma.$product_historyPayload<ExtArgs>
        fields: Prisma.product_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload>
          }
          findFirst: {
            args: Prisma.product_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload>
          }
          findMany: {
            args: Prisma.product_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload>[]
          }
          create: {
            args: Prisma.product_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload>
          }
          createMany: {
            args: Prisma.product_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.product_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload>
          }
          update: {
            args: Prisma.product_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload>
          }
          deleteMany: {
            args: Prisma.product_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_historyPayload>
          }
          aggregate: {
            args: Prisma.Product_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_history>
          }
          groupBy: {
            args: Prisma.product_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Product_historyCountAggregateOutputType> | number
          }
        }
      }
      setting: {
        payload: Prisma.$settingPayload<ExtArgs>
        fields: Prisma.settingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          findFirst: {
            args: Prisma.settingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          findMany: {
            args: Prisma.settingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>[]
          }
          create: {
            args: Prisma.settingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          createMany: {
            args: Prisma.settingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.settingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          update: {
            args: Prisma.settingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          deleteMany: {
            args: Prisma.settingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.settingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.settingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      transaction_item: {
        payload: Prisma.$transaction_itemPayload<ExtArgs>
        fields: Prisma.transaction_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload>
          }
          findFirst: {
            args: Prisma.transaction_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload>
          }
          findMany: {
            args: Prisma.transaction_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload>[]
          }
          create: {
            args: Prisma.transaction_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload>
          }
          createMany: {
            args: Prisma.transaction_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transaction_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload>
          }
          update: {
            args: Prisma.transaction_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload>
          }
          deleteMany: {
            args: Prisma.transaction_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transaction_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_itemPayload>
          }
          aggregate: {
            args: Prisma.Transaction_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_item>
          }
          groupBy: {
            args: Prisma.transaction_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_itemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    audit?: auditOmit
    category?: categoryOmit
    inventory?: inventoryOmit
    preorder?: preorderOmit
    product?: productOmit
    product_variant?: product_variantOmit
    product_option?: product_optionOmit
    product_history?: product_historyOmit
    setting?: settingOmit
    transaction?: transactionOmit
    transaction_item?: transaction_itemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    audit: number
    preorder: number
    transaction: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | UserCountOutputTypeCountAuditArgs
    preorder?: boolean | UserCountOutputTypeCountPreorderArgs
    transaction?: boolean | UserCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreorderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preorderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    product: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | InventoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_variantWhereInput
  }


  /**
   * Count Type Product_variantCountOutputType
   */

  export type Product_variantCountOutputType = {
    options: number
  }

  export type Product_variantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | Product_variantCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * Product_variantCountOutputType without action
   */
  export type Product_variantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_variantCountOutputType
     */
    select?: Product_variantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Product_variantCountOutputType without action
   */
  export type Product_variantCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_optionWhereInput
  }


  /**
   * Count Type Product_optionCountOutputType
   */

  export type Product_optionCountOutputType = {
    transaction_items: number
    product_history: number
    preorder: number
  }

  export type Product_optionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_items?: boolean | Product_optionCountOutputTypeCountTransaction_itemsArgs
    product_history?: boolean | Product_optionCountOutputTypeCountProduct_historyArgs
    preorder?: boolean | Product_optionCountOutputTypeCountPreorderArgs
  }

  // Custom InputTypes
  /**
   * Product_optionCountOutputType without action
   */
  export type Product_optionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_optionCountOutputType
     */
    select?: Product_optionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Product_optionCountOutputType without action
   */
  export type Product_optionCountOutputTypeCountTransaction_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_itemWhereInput
  }

  /**
   * Product_optionCountOutputType without action
   */
  export type Product_optionCountOutputTypeCountProduct_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_historyWhereInput
  }

  /**
   * Product_optionCountOutputType without action
   */
  export type Product_optionCountOutputTypeCountPreorderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preorderWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    transaction_item: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_item?: boolean | TransactionCountOutputTypeCountTransaction_itemArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountTransaction_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_itemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updatedAt: Date | null
    avatar: string | null
    last_login: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updatedAt: Date | null
    avatar: string | null
    last_login: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    avatar: number
    last_login: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    avatar?: true
    last_login?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    avatar?: true
    last_login?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    avatar?: true
    last_login?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.user_role
    createdAt: Date
    updatedAt: Date
    avatar: string | null
    last_login: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatar?: boolean
    last_login?: boolean
    audit?: boolean | user$auditArgs<ExtArgs>
    preorder?: boolean | user$preorderArgs<ExtArgs>
    transaction?: boolean | user$transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avatar?: boolean
    last_login?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "avatar" | "last_login", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | user$auditArgs<ExtArgs>
    preorder?: boolean | user$preorderArgs<ExtArgs>
    transaction?: boolean | user$transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      audit: Prisma.$auditPayload<ExtArgs>[]
      preorder: Prisma.$preorderPayload<ExtArgs>[]
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.user_role
      createdAt: Date
      updatedAt: Date
      avatar: string | null
      last_login: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit<T extends user$auditArgs<ExtArgs> = {}>(args?: Subset<T, user$auditArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preorder<T extends user$preorderArgs<ExtArgs> = {}>(args?: Subset<T, user$preorderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends user$transactionArgs<ExtArgs> = {}>(args?: Subset<T, user$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly last_login: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.audit
   */
  export type user$auditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    where?: auditWhereInput
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    cursor?: auditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * user.preorder
   */
  export type user$preorderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    where?: preorderWhereInput
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    cursor?: preorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * user.transaction
   */
  export type user$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model audit
   */

  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  export type AuditAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditSumAggregateOutputType = {
    id: number | null
  }

  export type AuditMinAggregateOutputType = {
    id: number | null
    action: string | null
    action_url: string | null
    ip_address: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type AuditMaxAggregateOutputType = {
    id: number | null
    action: string | null
    action_url: string | null
    ip_address: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type AuditCountAggregateOutputType = {
    id: number
    action: number
    action_url: number
    ip_address: number
    created_at: number
    user_id: number
    _all: number
  }


  export type AuditAvgAggregateInputType = {
    id?: true
  }

  export type AuditSumAggregateInputType = {
    id?: true
  }

  export type AuditMinAggregateInputType = {
    id?: true
    action?: true
    action_url?: true
    ip_address?: true
    created_at?: true
    user_id?: true
  }

  export type AuditMaxAggregateInputType = {
    id?: true
    action?: true
    action_url?: true
    ip_address?: true
    created_at?: true
    user_id?: true
  }

  export type AuditCountAggregateInputType = {
    id?: true
    action?: true
    action_url?: true
    ip_address?: true
    created_at?: true
    user_id?: true
    _all?: true
  }

  export type AuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit to aggregate.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audits
    **/
    _count?: true | AuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMaxAggregateInputType
  }

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>
  }




  export type auditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditWhereInput
    orderBy?: auditOrderByWithAggregationInput | auditOrderByWithAggregationInput[]
    by: AuditScalarFieldEnum[] | AuditScalarFieldEnum
    having?: auditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCountAggregateInputType | true
    _avg?: AuditAvgAggregateInputType
    _sum?: AuditSumAggregateInputType
    _min?: AuditMinAggregateInputType
    _max?: AuditMaxAggregateInputType
  }

  export type AuditGroupByOutputType = {
    id: number
    action: string
    action_url: string | null
    ip_address: string | null
    created_at: Date
    user_id: string
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  type GetAuditGroupByPayload<T extends auditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditGroupByOutputType[P]>
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
        }
      >
    >


  export type auditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    action_url?: boolean
    ip_address?: boolean
    created_at?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>



  export type auditSelectScalar = {
    id?: boolean
    action?: boolean
    action_url?: boolean
    ip_address?: boolean
    created_at?: boolean
    user_id?: boolean
  }

  export type auditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "action_url" | "ip_address" | "created_at" | "user_id", ExtArgs["result"]["audit"]>
  export type auditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $auditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      action_url: string | null
      ip_address: string | null
      created_at: Date
      user_id: string
    }, ExtArgs["result"]["audit"]>
    composites: {}
  }

  type auditGetPayload<S extends boolean | null | undefined | auditDefaultArgs> = $Result.GetResult<Prisma.$auditPayload, S>

  type auditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditCountAggregateInputType | true
    }

  export interface auditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit'], meta: { name: 'audit' } }
    /**
     * Find zero or one Audit that matches the filter.
     * @param {auditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auditFindUniqueArgs>(args: SelectSubset<T, auditFindUniqueArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auditFindUniqueOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auditFindUniqueOrThrowArgs>(args: SelectSubset<T, auditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auditFindFirstArgs>(args?: SelectSubset<T, auditFindFirstArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindFirstOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auditFindFirstOrThrowArgs>(args?: SelectSubset<T, auditFindFirstOrThrowArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditWithIdOnly = await prisma.audit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auditFindManyArgs>(args?: SelectSubset<T, auditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit.
     * @param {auditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     * 
     */
    create<T extends auditCreateArgs>(args: SelectSubset<T, auditCreateArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audits.
     * @param {auditCreateManyArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auditCreateManyArgs>(args?: SelectSubset<T, auditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Audit.
     * @param {auditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     * 
     */
    delete<T extends auditDeleteArgs>(args: SelectSubset<T, auditDeleteArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit.
     * @param {auditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auditUpdateArgs>(args: SelectSubset<T, auditUpdateArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audits.
     * @param {auditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auditDeleteManyArgs>(args?: SelectSubset<T, auditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auditUpdateManyArgs>(args: SelectSubset<T, auditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audit.
     * @param {auditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
     */
    upsert<T extends auditUpsertArgs>(args: SelectSubset<T, auditUpsertArgs<ExtArgs>>): Prisma__auditClient<$Result.GetResult<Prisma.$auditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends auditCountArgs>(
      args?: Subset<T, auditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditAggregateArgs>(args: Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auditGroupByArgs['orderBy'] }
        : { orderBy?: auditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit model
   */
  readonly fields: auditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit model
   */
  interface auditFieldRefs {
    readonly id: FieldRef<"audit", 'Int'>
    readonly action: FieldRef<"audit", 'String'>
    readonly action_url: FieldRef<"audit", 'String'>
    readonly ip_address: FieldRef<"audit", 'String'>
    readonly created_at: FieldRef<"audit", 'DateTime'>
    readonly user_id: FieldRef<"audit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * audit findUnique
   */
  export type auditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit findUniqueOrThrow
   */
  export type auditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit findFirst
   */
  export type auditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit findFirstOrThrow
   */
  export type auditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audit to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit findMany
   */
  export type auditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter, which audits to fetch.
     */
    where?: auditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audits to fetch.
     */
    orderBy?: auditOrderByWithRelationInput | auditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audits.
     */
    cursor?: auditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audits.
     */
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * audit create
   */
  export type auditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * The data needed to create a audit.
     */
    data: XOR<auditCreateInput, auditUncheckedCreateInput>
  }

  /**
   * audit createMany
   */
  export type auditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audits.
     */
    data: auditCreateManyInput | auditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit update
   */
  export type auditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * The data needed to update a audit.
     */
    data: XOR<auditUpdateInput, auditUncheckedUpdateInput>
    /**
     * Choose, which audit to update.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit updateMany
   */
  export type auditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audits.
     */
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyInput>
    /**
     * Filter which audits to update
     */
    where?: auditWhereInput
    /**
     * Limit how many audits to update.
     */
    limit?: number
  }

  /**
   * audit upsert
   */
  export type auditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * The filter to search for the audit to update in case it exists.
     */
    where: auditWhereUniqueInput
    /**
     * In case the audit found by the `where` argument doesn't exist, create a new audit with this data.
     */
    create: XOR<auditCreateInput, auditUncheckedCreateInput>
    /**
     * In case the audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auditUpdateInput, auditUncheckedUpdateInput>
  }

  /**
   * audit delete
   */
  export type auditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
    /**
     * Filter which audit to delete.
     */
    where: auditWhereUniqueInput
  }

  /**
   * audit deleteMany
   */
  export type auditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audits to delete
     */
    where?: auditWhereInput
    /**
     * Limit how many audits to delete.
     */
    limit?: number
  }

  /**
   * audit without action
   */
  export type auditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit
     */
    select?: auditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit
     */
    omit?: auditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      product: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends category$productArgs<ExtArgs> = {}>(args?: Subset<T, category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly created_at: FieldRef<"category", 'DateTime'>
    readonly updated_at: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.product
   */
  export type category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    name: number
    image: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    name: string
    image: string | null
    created_at: Date
    updated_at: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | inventory$productArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>



  export type inventorySelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "created_at" | "updated_at", ExtArgs["result"]["inventory"]>
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | inventory$productArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      product: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends inventory$productArgs<ExtArgs> = {}>(args?: Subset<T, inventory$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<"inventory", 'Int'>
    readonly name: FieldRef<"inventory", 'String'>
    readonly image: FieldRef<"inventory", 'String'>
    readonly created_at: FieldRef<"inventory", 'DateTime'>
    readonly updated_at: FieldRef<"inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory.product
   */
  export type inventory$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model preorder
   */

  export type AggregatePreorder = {
    _count: PreorderCountAggregateOutputType | null
    _avg: PreorderAvgAggregateOutputType | null
    _sum: PreorderSumAggregateOutputType | null
    _min: PreorderMinAggregateOutputType | null
    _max: PreorderMaxAggregateOutputType | null
  }

  export type PreorderAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    product_option_id: number | null
  }

  export type PreorderSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    product_option_id: number | null
  }

  export type PreorderMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    status: $Enums.preorder_status | null
    created_at: Date | null
    updated_at: Date | null
    product_option_id: number | null
    customer_id: string | null
  }

  export type PreorderMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    status: $Enums.preorder_status | null
    created_at: Date | null
    updated_at: Date | null
    product_option_id: number | null
    customer_id: string | null
  }

  export type PreorderCountAggregateOutputType = {
    id: number
    quantity: number
    status: number
    created_at: number
    updated_at: number
    product_option_id: number
    customer_id: number
    _all: number
  }


  export type PreorderAvgAggregateInputType = {
    id?: true
    quantity?: true
    product_option_id?: true
  }

  export type PreorderSumAggregateInputType = {
    id?: true
    quantity?: true
    product_option_id?: true
  }

  export type PreorderMinAggregateInputType = {
    id?: true
    quantity?: true
    status?: true
    created_at?: true
    updated_at?: true
    product_option_id?: true
    customer_id?: true
  }

  export type PreorderMaxAggregateInputType = {
    id?: true
    quantity?: true
    status?: true
    created_at?: true
    updated_at?: true
    product_option_id?: true
    customer_id?: true
  }

  export type PreorderCountAggregateInputType = {
    id?: true
    quantity?: true
    status?: true
    created_at?: true
    updated_at?: true
    product_option_id?: true
    customer_id?: true
    _all?: true
  }

  export type PreorderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preorder to aggregate.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned preorders
    **/
    _count?: true | PreorderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreorderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreorderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreorderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreorderMaxAggregateInputType
  }

  export type GetPreorderAggregateType<T extends PreorderAggregateArgs> = {
        [P in keyof T & keyof AggregatePreorder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreorder[P]>
      : GetScalarType<T[P], AggregatePreorder[P]>
  }




  export type preorderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preorderWhereInput
    orderBy?: preorderOrderByWithAggregationInput | preorderOrderByWithAggregationInput[]
    by: PreorderScalarFieldEnum[] | PreorderScalarFieldEnum
    having?: preorderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreorderCountAggregateInputType | true
    _avg?: PreorderAvgAggregateInputType
    _sum?: PreorderSumAggregateInputType
    _min?: PreorderMinAggregateInputType
    _max?: PreorderMaxAggregateInputType
  }

  export type PreorderGroupByOutputType = {
    id: number
    quantity: number
    status: $Enums.preorder_status
    created_at: Date
    updated_at: Date
    product_option_id: number
    customer_id: string
    _count: PreorderCountAggregateOutputType | null
    _avg: PreorderAvgAggregateOutputType | null
    _sum: PreorderSumAggregateOutputType | null
    _min: PreorderMinAggregateOutputType | null
    _max: PreorderMaxAggregateOutputType | null
  }

  type GetPreorderGroupByPayload<T extends preorderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreorderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreorderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreorderGroupByOutputType[P]>
            : GetScalarType<T[P], PreorderGroupByOutputType[P]>
        }
      >
    >


  export type preorderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_option_id?: boolean
    customer_id?: boolean
    product_option?: boolean | product_optionDefaultArgs<ExtArgs>
    customer?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preorder"]>



  export type preorderSelectScalar = {
    id?: boolean
    quantity?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_option_id?: boolean
    customer_id?: boolean
  }

  export type preorderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "status" | "created_at" | "updated_at" | "product_option_id" | "customer_id", ExtArgs["result"]["preorder"]>
  export type preorderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_option?: boolean | product_optionDefaultArgs<ExtArgs>
    customer?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $preorderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "preorder"
    objects: {
      product_option: Prisma.$product_optionPayload<ExtArgs>
      customer: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      status: $Enums.preorder_status
      created_at: Date
      updated_at: Date
      product_option_id: number
      customer_id: string
    }, ExtArgs["result"]["preorder"]>
    composites: {}
  }

  type preorderGetPayload<S extends boolean | null | undefined | preorderDefaultArgs> = $Result.GetResult<Prisma.$preorderPayload, S>

  type preorderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preorderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreorderCountAggregateInputType | true
    }

  export interface preorderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['preorder'], meta: { name: 'preorder' } }
    /**
     * Find zero or one Preorder that matches the filter.
     * @param {preorderFindUniqueArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preorderFindUniqueArgs>(args: SelectSubset<T, preorderFindUniqueArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preorder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preorderFindUniqueOrThrowArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preorderFindUniqueOrThrowArgs>(args: SelectSubset<T, preorderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preorder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderFindFirstArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preorderFindFirstArgs>(args?: SelectSubset<T, preorderFindFirstArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preorder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderFindFirstOrThrowArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preorderFindFirstOrThrowArgs>(args?: SelectSubset<T, preorderFindFirstOrThrowArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preorders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preorders
     * const preorders = await prisma.preorder.findMany()
     * 
     * // Get first 10 Preorders
     * const preorders = await prisma.preorder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preorderWithIdOnly = await prisma.preorder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends preorderFindManyArgs>(args?: SelectSubset<T, preorderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preorder.
     * @param {preorderCreateArgs} args - Arguments to create a Preorder.
     * @example
     * // Create one Preorder
     * const Preorder = await prisma.preorder.create({
     *   data: {
     *     // ... data to create a Preorder
     *   }
     * })
     * 
     */
    create<T extends preorderCreateArgs>(args: SelectSubset<T, preorderCreateArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preorders.
     * @param {preorderCreateManyArgs} args - Arguments to create many Preorders.
     * @example
     * // Create many Preorders
     * const preorder = await prisma.preorder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preorderCreateManyArgs>(args?: SelectSubset<T, preorderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Preorder.
     * @param {preorderDeleteArgs} args - Arguments to delete one Preorder.
     * @example
     * // Delete one Preorder
     * const Preorder = await prisma.preorder.delete({
     *   where: {
     *     // ... filter to delete one Preorder
     *   }
     * })
     * 
     */
    delete<T extends preorderDeleteArgs>(args: SelectSubset<T, preorderDeleteArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preorder.
     * @param {preorderUpdateArgs} args - Arguments to update one Preorder.
     * @example
     * // Update one Preorder
     * const preorder = await prisma.preorder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preorderUpdateArgs>(args: SelectSubset<T, preorderUpdateArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preorders.
     * @param {preorderDeleteManyArgs} args - Arguments to filter Preorders to delete.
     * @example
     * // Delete a few Preorders
     * const { count } = await prisma.preorder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preorderDeleteManyArgs>(args?: SelectSubset<T, preorderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preorders
     * const preorder = await prisma.preorder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preorderUpdateManyArgs>(args: SelectSubset<T, preorderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Preorder.
     * @param {preorderUpsertArgs} args - Arguments to update or create a Preorder.
     * @example
     * // Update or create a Preorder
     * const preorder = await prisma.preorder.upsert({
     *   create: {
     *     // ... data to create a Preorder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preorder we want to update
     *   }
     * })
     */
    upsert<T extends preorderUpsertArgs>(args: SelectSubset<T, preorderUpsertArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderCountArgs} args - Arguments to filter Preorders to count.
     * @example
     * // Count the number of Preorders
     * const count = await prisma.preorder.count({
     *   where: {
     *     // ... the filter for the Preorders we want to count
     *   }
     * })
    **/
    count<T extends preorderCountArgs>(
      args?: Subset<T, preorderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreorderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreorderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreorderAggregateArgs>(args: Subset<T, PreorderAggregateArgs>): Prisma.PrismaPromise<GetPreorderAggregateType<T>>

    /**
     * Group by Preorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends preorderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preorderGroupByArgs['orderBy'] }
        : { orderBy?: preorderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, preorderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreorderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the preorder model
   */
  readonly fields: preorderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for preorder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preorderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_option<T extends product_optionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, product_optionDefaultArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the preorder model
   */
  interface preorderFieldRefs {
    readonly id: FieldRef<"preorder", 'Int'>
    readonly quantity: FieldRef<"preorder", 'Int'>
    readonly status: FieldRef<"preorder", 'preorder_status'>
    readonly created_at: FieldRef<"preorder", 'DateTime'>
    readonly updated_at: FieldRef<"preorder", 'DateTime'>
    readonly product_option_id: FieldRef<"preorder", 'Int'>
    readonly customer_id: FieldRef<"preorder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * preorder findUnique
   */
  export type preorderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder findUniqueOrThrow
   */
  export type preorderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder findFirst
   */
  export type preorderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preorders.
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preorders.
     */
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * preorder findFirstOrThrow
   */
  export type preorderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preorders.
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preorders.
     */
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * preorder findMany
   */
  export type preorderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorders to fetch.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing preorders.
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * preorder create
   */
  export type preorderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * The data needed to create a preorder.
     */
    data: XOR<preorderCreateInput, preorderUncheckedCreateInput>
  }

  /**
   * preorder createMany
   */
  export type preorderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many preorders.
     */
    data: preorderCreateManyInput | preorderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preorder update
   */
  export type preorderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * The data needed to update a preorder.
     */
    data: XOR<preorderUpdateInput, preorderUncheckedUpdateInput>
    /**
     * Choose, which preorder to update.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder updateMany
   */
  export type preorderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update preorders.
     */
    data: XOR<preorderUpdateManyMutationInput, preorderUncheckedUpdateManyInput>
    /**
     * Filter which preorders to update
     */
    where?: preorderWhereInput
    /**
     * Limit how many preorders to update.
     */
    limit?: number
  }

  /**
   * preorder upsert
   */
  export type preorderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * The filter to search for the preorder to update in case it exists.
     */
    where: preorderWhereUniqueInput
    /**
     * In case the preorder found by the `where` argument doesn't exist, create a new preorder with this data.
     */
    create: XOR<preorderCreateInput, preorderUncheckedCreateInput>
    /**
     * In case the preorder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preorderUpdateInput, preorderUncheckedUpdateInput>
  }

  /**
   * preorder delete
   */
  export type preorderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter which preorder to delete.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder deleteMany
   */
  export type preorderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preorders to delete
     */
    where?: preorderWhereInput
    /**
     * Limit how many preorders to delete.
     */
    limit?: number
  }

  /**
   * preorder without action
   */
  export type preorderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    inventoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    inventoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    category_id: number | null
    inventoryId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    category_id: number | null
    inventoryId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    image: number
    category_id: number
    inventoryId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    category_id?: true
    inventoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    category_id?: true
    inventoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    category_id?: true
    inventoryId?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    category_id?: true
    inventoryId?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    category_id?: true
    inventoryId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    image: string | null
    category_id: number | null
    inventoryId: number | null
    created_at: Date
    updated_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    category_id?: boolean
    inventoryId?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | product$categoryArgs<ExtArgs>
    inventory?: boolean | product$inventoryArgs<ExtArgs>
    variants?: boolean | product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    category_id?: boolean
    inventoryId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "category_id" | "inventoryId" | "created_at" | "updated_at", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | product$categoryArgs<ExtArgs>
    inventory?: boolean | product$inventoryArgs<ExtArgs>
    variants?: boolean | product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs> | null
      inventory: Prisma.$inventoryPayload<ExtArgs> | null
      variants: Prisma.$product_variantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string | null
      category_id: number | null
      inventoryId: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, product$categoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventory<T extends product$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, product$inventoryArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    variants<T extends product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly image: FieldRef<"product", 'String'>
    readonly category_id: FieldRef<"product", 'Int'>
    readonly inventoryId: FieldRef<"product", 'Int'>
    readonly created_at: FieldRef<"product", 'DateTime'>
    readonly updated_at: FieldRef<"product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.category
   */
  export type product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * product.inventory
   */
  export type product$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
  }

  /**
   * product.variants
   */
  export type product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    where?: product_variantWhereInput
    orderBy?: product_variantOrderByWithRelationInput | product_variantOrderByWithRelationInput[]
    cursor?: product_variantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_variantScalarFieldEnum | Product_variantScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model product_variant
   */

  export type AggregateProduct_variant = {
    _count: Product_variantCountAggregateOutputType | null
    _avg: Product_variantAvgAggregateOutputType | null
    _sum: Product_variantSumAggregateOutputType | null
    _min: Product_variantMinAggregateOutputType | null
    _max: Product_variantMaxAggregateOutputType | null
  }

  export type Product_variantAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type Product_variantSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type Product_variantMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Product_variantMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Product_variantCountAggregateOutputType = {
    id: number
    product_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Product_variantAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type Product_variantSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type Product_variantMinAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Product_variantMaxAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Product_variantCountAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Product_variantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_variant to aggregate.
     */
    where?: product_variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantOrderByWithRelationInput | product_variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_variants
    **/
    _count?: true | Product_variantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_variantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_variantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_variantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_variantMaxAggregateInputType
  }

  export type GetProduct_variantAggregateType<T extends Product_variantAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_variant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_variant[P]>
      : GetScalarType<T[P], AggregateProduct_variant[P]>
  }




  export type product_variantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_variantWhereInput
    orderBy?: product_variantOrderByWithAggregationInput | product_variantOrderByWithAggregationInput[]
    by: Product_variantScalarFieldEnum[] | Product_variantScalarFieldEnum
    having?: product_variantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_variantCountAggregateInputType | true
    _avg?: Product_variantAvgAggregateInputType
    _sum?: Product_variantSumAggregateInputType
    _min?: Product_variantMinAggregateInputType
    _max?: Product_variantMaxAggregateInputType
  }

  export type Product_variantGroupByOutputType = {
    id: number
    product_id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: Product_variantCountAggregateOutputType | null
    _avg: Product_variantAvgAggregateOutputType | null
    _sum: Product_variantSumAggregateOutputType | null
    _min: Product_variantMinAggregateOutputType | null
    _max: Product_variantMaxAggregateOutputType | null
  }

  type GetProduct_variantGroupByPayload<T extends product_variantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_variantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_variantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_variantGroupByOutputType[P]>
            : GetScalarType<T[P], Product_variantGroupByOutputType[P]>
        }
      >
    >


  export type product_variantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    options?: boolean | product_variant$optionsArgs<ExtArgs>
    _count?: boolean | Product_variantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_variant"]>



  export type product_variantSelectScalar = {
    id?: boolean
    product_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type product_variantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["product_variant"]>
  export type product_variantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    options?: boolean | product_variant$optionsArgs<ExtArgs>
    _count?: boolean | Product_variantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $product_variantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_variant"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      options: Prisma.$product_optionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product_variant"]>
    composites: {}
  }

  type product_variantGetPayload<S extends boolean | null | undefined | product_variantDefaultArgs> = $Result.GetResult<Prisma.$product_variantPayload, S>

  type product_variantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_variantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_variantCountAggregateInputType | true
    }

  export interface product_variantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_variant'], meta: { name: 'product_variant' } }
    /**
     * Find zero or one Product_variant that matches the filter.
     * @param {product_variantFindUniqueArgs} args - Arguments to find a Product_variant
     * @example
     * // Get one Product_variant
     * const product_variant = await prisma.product_variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_variantFindUniqueArgs>(args: SelectSubset<T, product_variantFindUniqueArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_variantFindUniqueOrThrowArgs} args - Arguments to find a Product_variant
     * @example
     * // Get one Product_variant
     * const product_variant = await prisma.product_variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_variantFindUniqueOrThrowArgs>(args: SelectSubset<T, product_variantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantFindFirstArgs} args - Arguments to find a Product_variant
     * @example
     * // Get one Product_variant
     * const product_variant = await prisma.product_variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_variantFindFirstArgs>(args?: SelectSubset<T, product_variantFindFirstArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantFindFirstOrThrowArgs} args - Arguments to find a Product_variant
     * @example
     * // Get one Product_variant
     * const product_variant = await prisma.product_variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_variantFindFirstOrThrowArgs>(args?: SelectSubset<T, product_variantFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_variants
     * const product_variants = await prisma.product_variant.findMany()
     * 
     * // Get first 10 Product_variants
     * const product_variants = await prisma.product_variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_variantWithIdOnly = await prisma.product_variant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_variantFindManyArgs>(args?: SelectSubset<T, product_variantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_variant.
     * @param {product_variantCreateArgs} args - Arguments to create a Product_variant.
     * @example
     * // Create one Product_variant
     * const Product_variant = await prisma.product_variant.create({
     *   data: {
     *     // ... data to create a Product_variant
     *   }
     * })
     * 
     */
    create<T extends product_variantCreateArgs>(args: SelectSubset<T, product_variantCreateArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_variants.
     * @param {product_variantCreateManyArgs} args - Arguments to create many Product_variants.
     * @example
     * // Create many Product_variants
     * const product_variant = await prisma.product_variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_variantCreateManyArgs>(args?: SelectSubset<T, product_variantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_variant.
     * @param {product_variantDeleteArgs} args - Arguments to delete one Product_variant.
     * @example
     * // Delete one Product_variant
     * const Product_variant = await prisma.product_variant.delete({
     *   where: {
     *     // ... filter to delete one Product_variant
     *   }
     * })
     * 
     */
    delete<T extends product_variantDeleteArgs>(args: SelectSubset<T, product_variantDeleteArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_variant.
     * @param {product_variantUpdateArgs} args - Arguments to update one Product_variant.
     * @example
     * // Update one Product_variant
     * const product_variant = await prisma.product_variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_variantUpdateArgs>(args: SelectSubset<T, product_variantUpdateArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_variants.
     * @param {product_variantDeleteManyArgs} args - Arguments to filter Product_variants to delete.
     * @example
     * // Delete a few Product_variants
     * const { count } = await prisma.product_variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_variantDeleteManyArgs>(args?: SelectSubset<T, product_variantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_variants
     * const product_variant = await prisma.product_variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_variantUpdateManyArgs>(args: SelectSubset<T, product_variantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_variant.
     * @param {product_variantUpsertArgs} args - Arguments to update or create a Product_variant.
     * @example
     * // Update or create a Product_variant
     * const product_variant = await prisma.product_variant.upsert({
     *   create: {
     *     // ... data to create a Product_variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_variant we want to update
     *   }
     * })
     */
    upsert<T extends product_variantUpsertArgs>(args: SelectSubset<T, product_variantUpsertArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantCountArgs} args - Arguments to filter Product_variants to count.
     * @example
     * // Count the number of Product_variants
     * const count = await prisma.product_variant.count({
     *   where: {
     *     // ... the filter for the Product_variants we want to count
     *   }
     * })
    **/
    count<T extends product_variantCountArgs>(
      args?: Subset<T, product_variantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_variantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_variantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_variantAggregateArgs>(args: Subset<T, Product_variantAggregateArgs>): Prisma.PrismaPromise<GetProduct_variantAggregateType<T>>

    /**
     * Group by Product_variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_variantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_variantGroupByArgs['orderBy'] }
        : { orderBy?: product_variantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_variantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_variantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_variant model
   */
  readonly fields: product_variantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_variantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends product_variant$optionsArgs<ExtArgs> = {}>(args?: Subset<T, product_variant$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_variant model
   */
  interface product_variantFieldRefs {
    readonly id: FieldRef<"product_variant", 'Int'>
    readonly product_id: FieldRef<"product_variant", 'Int'>
    readonly name: FieldRef<"product_variant", 'String'>
    readonly created_at: FieldRef<"product_variant", 'DateTime'>
    readonly updated_at: FieldRef<"product_variant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_variant findUnique
   */
  export type product_variantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * Filter, which product_variant to fetch.
     */
    where: product_variantWhereUniqueInput
  }

  /**
   * product_variant findUniqueOrThrow
   */
  export type product_variantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * Filter, which product_variant to fetch.
     */
    where: product_variantWhereUniqueInput
  }

  /**
   * product_variant findFirst
   */
  export type product_variantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * Filter, which product_variant to fetch.
     */
    where?: product_variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantOrderByWithRelationInput | product_variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_variants.
     */
    cursor?: product_variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_variants.
     */
    distinct?: Product_variantScalarFieldEnum | Product_variantScalarFieldEnum[]
  }

  /**
   * product_variant findFirstOrThrow
   */
  export type product_variantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * Filter, which product_variant to fetch.
     */
    where?: product_variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantOrderByWithRelationInput | product_variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_variants.
     */
    cursor?: product_variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_variants.
     */
    distinct?: Product_variantScalarFieldEnum | Product_variantScalarFieldEnum[]
  }

  /**
   * product_variant findMany
   */
  export type product_variantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * Filter, which product_variants to fetch.
     */
    where?: product_variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantOrderByWithRelationInput | product_variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_variants.
     */
    cursor?: product_variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    distinct?: Product_variantScalarFieldEnum | Product_variantScalarFieldEnum[]
  }

  /**
   * product_variant create
   */
  export type product_variantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * The data needed to create a product_variant.
     */
    data: XOR<product_variantCreateInput, product_variantUncheckedCreateInput>
  }

  /**
   * product_variant createMany
   */
  export type product_variantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_variants.
     */
    data: product_variantCreateManyInput | product_variantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_variant update
   */
  export type product_variantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * The data needed to update a product_variant.
     */
    data: XOR<product_variantUpdateInput, product_variantUncheckedUpdateInput>
    /**
     * Choose, which product_variant to update.
     */
    where: product_variantWhereUniqueInput
  }

  /**
   * product_variant updateMany
   */
  export type product_variantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_variants.
     */
    data: XOR<product_variantUpdateManyMutationInput, product_variantUncheckedUpdateManyInput>
    /**
     * Filter which product_variants to update
     */
    where?: product_variantWhereInput
    /**
     * Limit how many product_variants to update.
     */
    limit?: number
  }

  /**
   * product_variant upsert
   */
  export type product_variantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * The filter to search for the product_variant to update in case it exists.
     */
    where: product_variantWhereUniqueInput
    /**
     * In case the product_variant found by the `where` argument doesn't exist, create a new product_variant with this data.
     */
    create: XOR<product_variantCreateInput, product_variantUncheckedCreateInput>
    /**
     * In case the product_variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_variantUpdateInput, product_variantUncheckedUpdateInput>
  }

  /**
   * product_variant delete
   */
  export type product_variantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
    /**
     * Filter which product_variant to delete.
     */
    where: product_variantWhereUniqueInput
  }

  /**
   * product_variant deleteMany
   */
  export type product_variantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_variants to delete
     */
    where?: product_variantWhereInput
    /**
     * Limit how many product_variants to delete.
     */
    limit?: number
  }

  /**
   * product_variant.options
   */
  export type product_variant$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    where?: product_optionWhereInput
    orderBy?: product_optionOrderByWithRelationInput | product_optionOrderByWithRelationInput[]
    cursor?: product_optionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_optionScalarFieldEnum | Product_optionScalarFieldEnum[]
  }

  /**
   * product_variant without action
   */
  export type product_variantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variant
     */
    select?: product_variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variant
     */
    omit?: product_variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantInclude<ExtArgs> | null
  }


  /**
   * Model product_option
   */

  export type AggregateProduct_option = {
    _count: Product_optionCountAggregateOutputType | null
    _avg: Product_optionAvgAggregateOutputType | null
    _sum: Product_optionSumAggregateOutputType | null
    _min: Product_optionMinAggregateOutputType | null
    _max: Product_optionMaxAggregateOutputType | null
  }

  export type Product_optionAvgAggregateOutputType = {
    id: number | null
    price: number | null
    cost: number | null
    stock: number | null
    variant_id: number | null
  }

  export type Product_optionSumAggregateOutputType = {
    id: number | null
    price: number | null
    cost: number | null
    stock: number | null
    variant_id: number | null
  }

  export type Product_optionMinAggregateOutputType = {
    id: number | null
    sku: string | null
    image: string | null
    price: number | null
    cost: number | null
    stock: number | null
    option_value: string | null
    variant_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Product_optionMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    image: string | null
    price: number | null
    cost: number | null
    stock: number | null
    option_value: string | null
    variant_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Product_optionCountAggregateOutputType = {
    id: number
    sku: number
    image: number
    price: number
    cost: number
    stock: number
    option_value: number
    variant_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Product_optionAvgAggregateInputType = {
    id?: true
    price?: true
    cost?: true
    stock?: true
    variant_id?: true
  }

  export type Product_optionSumAggregateInputType = {
    id?: true
    price?: true
    cost?: true
    stock?: true
    variant_id?: true
  }

  export type Product_optionMinAggregateInputType = {
    id?: true
    sku?: true
    image?: true
    price?: true
    cost?: true
    stock?: true
    option_value?: true
    variant_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Product_optionMaxAggregateInputType = {
    id?: true
    sku?: true
    image?: true
    price?: true
    cost?: true
    stock?: true
    option_value?: true
    variant_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Product_optionCountAggregateInputType = {
    id?: true
    sku?: true
    image?: true
    price?: true
    cost?: true
    stock?: true
    option_value?: true
    variant_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Product_optionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_option to aggregate.
     */
    where?: product_optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionOrderByWithRelationInput | product_optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_options
    **/
    _count?: true | Product_optionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_optionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_optionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_optionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_optionMaxAggregateInputType
  }

  export type GetProduct_optionAggregateType<T extends Product_optionAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_option]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_option[P]>
      : GetScalarType<T[P], AggregateProduct_option[P]>
  }




  export type product_optionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_optionWhereInput
    orderBy?: product_optionOrderByWithAggregationInput | product_optionOrderByWithAggregationInput[]
    by: Product_optionScalarFieldEnum[] | Product_optionScalarFieldEnum
    having?: product_optionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_optionCountAggregateInputType | true
    _avg?: Product_optionAvgAggregateInputType
    _sum?: Product_optionSumAggregateInputType
    _min?: Product_optionMinAggregateInputType
    _max?: Product_optionMaxAggregateInputType
  }

  export type Product_optionGroupByOutputType = {
    id: number
    sku: string
    image: string | null
    price: number
    cost: number
    stock: number
    option_value: string
    variant_id: number
    created_at: Date
    updated_at: Date
    _count: Product_optionCountAggregateOutputType | null
    _avg: Product_optionAvgAggregateOutputType | null
    _sum: Product_optionSumAggregateOutputType | null
    _min: Product_optionMinAggregateOutputType | null
    _max: Product_optionMaxAggregateOutputType | null
  }

  type GetProduct_optionGroupByPayload<T extends product_optionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_optionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_optionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_optionGroupByOutputType[P]>
            : GetScalarType<T[P], Product_optionGroupByOutputType[P]>
        }
      >
    >


  export type product_optionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    image?: boolean
    price?: boolean
    cost?: boolean
    stock?: boolean
    option_value?: boolean
    variant_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    variant?: boolean | product_variantDefaultArgs<ExtArgs>
    transaction_items?: boolean | product_option$transaction_itemsArgs<ExtArgs>
    product_history?: boolean | product_option$product_historyArgs<ExtArgs>
    preorder?: boolean | product_option$preorderArgs<ExtArgs>
    _count?: boolean | Product_optionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_option"]>



  export type product_optionSelectScalar = {
    id?: boolean
    sku?: boolean
    image?: boolean
    price?: boolean
    cost?: boolean
    stock?: boolean
    option_value?: boolean
    variant_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type product_optionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "image" | "price" | "cost" | "stock" | "option_value" | "variant_id" | "created_at" | "updated_at", ExtArgs["result"]["product_option"]>
  export type product_optionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | product_variantDefaultArgs<ExtArgs>
    transaction_items?: boolean | product_option$transaction_itemsArgs<ExtArgs>
    product_history?: boolean | product_option$product_historyArgs<ExtArgs>
    preorder?: boolean | product_option$preorderArgs<ExtArgs>
    _count?: boolean | Product_optionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $product_optionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_option"
    objects: {
      variant: Prisma.$product_variantPayload<ExtArgs>
      transaction_items: Prisma.$transaction_itemPayload<ExtArgs>[]
      product_history: Prisma.$product_historyPayload<ExtArgs>[]
      preorder: Prisma.$preorderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku: string
      image: string | null
      price: number
      cost: number
      stock: number
      option_value: string
      variant_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product_option"]>
    composites: {}
  }

  type product_optionGetPayload<S extends boolean | null | undefined | product_optionDefaultArgs> = $Result.GetResult<Prisma.$product_optionPayload, S>

  type product_optionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_optionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_optionCountAggregateInputType | true
    }

  export interface product_optionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_option'], meta: { name: 'product_option' } }
    /**
     * Find zero or one Product_option that matches the filter.
     * @param {product_optionFindUniqueArgs} args - Arguments to find a Product_option
     * @example
     * // Get one Product_option
     * const product_option = await prisma.product_option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_optionFindUniqueArgs>(args: SelectSubset<T, product_optionFindUniqueArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_optionFindUniqueOrThrowArgs} args - Arguments to find a Product_option
     * @example
     * // Get one Product_option
     * const product_option = await prisma.product_option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_optionFindUniqueOrThrowArgs>(args: SelectSubset<T, product_optionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionFindFirstArgs} args - Arguments to find a Product_option
     * @example
     * // Get one Product_option
     * const product_option = await prisma.product_option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_optionFindFirstArgs>(args?: SelectSubset<T, product_optionFindFirstArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionFindFirstOrThrowArgs} args - Arguments to find a Product_option
     * @example
     * // Get one Product_option
     * const product_option = await prisma.product_option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_optionFindFirstOrThrowArgs>(args?: SelectSubset<T, product_optionFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_options
     * const product_options = await prisma.product_option.findMany()
     * 
     * // Get first 10 Product_options
     * const product_options = await prisma.product_option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_optionWithIdOnly = await prisma.product_option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_optionFindManyArgs>(args?: SelectSubset<T, product_optionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_option.
     * @param {product_optionCreateArgs} args - Arguments to create a Product_option.
     * @example
     * // Create one Product_option
     * const Product_option = await prisma.product_option.create({
     *   data: {
     *     // ... data to create a Product_option
     *   }
     * })
     * 
     */
    create<T extends product_optionCreateArgs>(args: SelectSubset<T, product_optionCreateArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_options.
     * @param {product_optionCreateManyArgs} args - Arguments to create many Product_options.
     * @example
     * // Create many Product_options
     * const product_option = await prisma.product_option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_optionCreateManyArgs>(args?: SelectSubset<T, product_optionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_option.
     * @param {product_optionDeleteArgs} args - Arguments to delete one Product_option.
     * @example
     * // Delete one Product_option
     * const Product_option = await prisma.product_option.delete({
     *   where: {
     *     // ... filter to delete one Product_option
     *   }
     * })
     * 
     */
    delete<T extends product_optionDeleteArgs>(args: SelectSubset<T, product_optionDeleteArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_option.
     * @param {product_optionUpdateArgs} args - Arguments to update one Product_option.
     * @example
     * // Update one Product_option
     * const product_option = await prisma.product_option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_optionUpdateArgs>(args: SelectSubset<T, product_optionUpdateArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_options.
     * @param {product_optionDeleteManyArgs} args - Arguments to filter Product_options to delete.
     * @example
     * // Delete a few Product_options
     * const { count } = await prisma.product_option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_optionDeleteManyArgs>(args?: SelectSubset<T, product_optionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_options
     * const product_option = await prisma.product_option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_optionUpdateManyArgs>(args: SelectSubset<T, product_optionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_option.
     * @param {product_optionUpsertArgs} args - Arguments to update or create a Product_option.
     * @example
     * // Update or create a Product_option
     * const product_option = await prisma.product_option.upsert({
     *   create: {
     *     // ... data to create a Product_option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_option we want to update
     *   }
     * })
     */
    upsert<T extends product_optionUpsertArgs>(args: SelectSubset<T, product_optionUpsertArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionCountArgs} args - Arguments to filter Product_options to count.
     * @example
     * // Count the number of Product_options
     * const count = await prisma.product_option.count({
     *   where: {
     *     // ... the filter for the Product_options we want to count
     *   }
     * })
    **/
    count<T extends product_optionCountArgs>(
      args?: Subset<T, product_optionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_optionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_optionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_optionAggregateArgs>(args: Subset<T, Product_optionAggregateArgs>): Prisma.PrismaPromise<GetProduct_optionAggregateType<T>>

    /**
     * Group by Product_option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_optionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_optionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_optionGroupByArgs['orderBy'] }
        : { orderBy?: product_optionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_optionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_optionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_option model
   */
  readonly fields: product_optionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_optionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends product_variantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, product_variantDefaultArgs<ExtArgs>>): Prisma__product_variantClient<$Result.GetResult<Prisma.$product_variantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction_items<T extends product_option$transaction_itemsArgs<ExtArgs> = {}>(args?: Subset<T, product_option$transaction_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_history<T extends product_option$product_historyArgs<ExtArgs> = {}>(args?: Subset<T, product_option$product_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preorder<T extends product_option$preorderArgs<ExtArgs> = {}>(args?: Subset<T, product_option$preorderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_option model
   */
  interface product_optionFieldRefs {
    readonly id: FieldRef<"product_option", 'Int'>
    readonly sku: FieldRef<"product_option", 'String'>
    readonly image: FieldRef<"product_option", 'String'>
    readonly price: FieldRef<"product_option", 'Int'>
    readonly cost: FieldRef<"product_option", 'Int'>
    readonly stock: FieldRef<"product_option", 'Int'>
    readonly option_value: FieldRef<"product_option", 'String'>
    readonly variant_id: FieldRef<"product_option", 'Int'>
    readonly created_at: FieldRef<"product_option", 'DateTime'>
    readonly updated_at: FieldRef<"product_option", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_option findUnique
   */
  export type product_optionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * Filter, which product_option to fetch.
     */
    where: product_optionWhereUniqueInput
  }

  /**
   * product_option findUniqueOrThrow
   */
  export type product_optionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * Filter, which product_option to fetch.
     */
    where: product_optionWhereUniqueInput
  }

  /**
   * product_option findFirst
   */
  export type product_optionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * Filter, which product_option to fetch.
     */
    where?: product_optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionOrderByWithRelationInput | product_optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_options.
     */
    cursor?: product_optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_options.
     */
    distinct?: Product_optionScalarFieldEnum | Product_optionScalarFieldEnum[]
  }

  /**
   * product_option findFirstOrThrow
   */
  export type product_optionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * Filter, which product_option to fetch.
     */
    where?: product_optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionOrderByWithRelationInput | product_optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_options.
     */
    cursor?: product_optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_options.
     */
    distinct?: Product_optionScalarFieldEnum | Product_optionScalarFieldEnum[]
  }

  /**
   * product_option findMany
   */
  export type product_optionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * Filter, which product_options to fetch.
     */
    where?: product_optionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_options to fetch.
     */
    orderBy?: product_optionOrderByWithRelationInput | product_optionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_options.
     */
    cursor?: product_optionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_options.
     */
    skip?: number
    distinct?: Product_optionScalarFieldEnum | Product_optionScalarFieldEnum[]
  }

  /**
   * product_option create
   */
  export type product_optionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * The data needed to create a product_option.
     */
    data: XOR<product_optionCreateInput, product_optionUncheckedCreateInput>
  }

  /**
   * product_option createMany
   */
  export type product_optionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_options.
     */
    data: product_optionCreateManyInput | product_optionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_option update
   */
  export type product_optionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * The data needed to update a product_option.
     */
    data: XOR<product_optionUpdateInput, product_optionUncheckedUpdateInput>
    /**
     * Choose, which product_option to update.
     */
    where: product_optionWhereUniqueInput
  }

  /**
   * product_option updateMany
   */
  export type product_optionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_options.
     */
    data: XOR<product_optionUpdateManyMutationInput, product_optionUncheckedUpdateManyInput>
    /**
     * Filter which product_options to update
     */
    where?: product_optionWhereInput
    /**
     * Limit how many product_options to update.
     */
    limit?: number
  }

  /**
   * product_option upsert
   */
  export type product_optionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * The filter to search for the product_option to update in case it exists.
     */
    where: product_optionWhereUniqueInput
    /**
     * In case the product_option found by the `where` argument doesn't exist, create a new product_option with this data.
     */
    create: XOR<product_optionCreateInput, product_optionUncheckedCreateInput>
    /**
     * In case the product_option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_optionUpdateInput, product_optionUncheckedUpdateInput>
  }

  /**
   * product_option delete
   */
  export type product_optionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
    /**
     * Filter which product_option to delete.
     */
    where: product_optionWhereUniqueInput
  }

  /**
   * product_option deleteMany
   */
  export type product_optionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_options to delete
     */
    where?: product_optionWhereInput
    /**
     * Limit how many product_options to delete.
     */
    limit?: number
  }

  /**
   * product_option.transaction_items
   */
  export type product_option$transaction_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    where?: transaction_itemWhereInput
    orderBy?: transaction_itemOrderByWithRelationInput | transaction_itemOrderByWithRelationInput[]
    cursor?: transaction_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_itemScalarFieldEnum | Transaction_itemScalarFieldEnum[]
  }

  /**
   * product_option.product_history
   */
  export type product_option$product_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    where?: product_historyWhereInput
    orderBy?: product_historyOrderByWithRelationInput | product_historyOrderByWithRelationInput[]
    cursor?: product_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_historyScalarFieldEnum | Product_historyScalarFieldEnum[]
  }

  /**
   * product_option.preorder
   */
  export type product_option$preorderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    where?: preorderWhereInput
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    cursor?: preorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * product_option without action
   */
  export type product_optionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_option
     */
    select?: product_optionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_option
     */
    omit?: product_optionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_optionInclude<ExtArgs> | null
  }


  /**
   * Model product_history
   */

  export type AggregateProduct_history = {
    _count: Product_historyCountAggregateOutputType | null
    _avg: Product_historyAvgAggregateOutputType | null
    _sum: Product_historySumAggregateOutputType | null
    _min: Product_historyMinAggregateOutputType | null
    _max: Product_historyMaxAggregateOutputType | null
  }

  export type Product_historyAvgAggregateOutputType = {
    id: number | null
    product_option_id: number | null
    quantity_before: number | null
    quantity_after: number | null
  }

  export type Product_historySumAggregateOutputType = {
    id: number | null
    product_option_id: number | null
    quantity_before: number | null
    quantity_after: number | null
  }

  export type Product_historyMinAggregateOutputType = {
    id: number | null
    product_option_id: number | null
    change_type: $Enums.product_history_change_type | null
    quantity_before: number | null
    quantity_after: number | null
    changed_at: Date | null
  }

  export type Product_historyMaxAggregateOutputType = {
    id: number | null
    product_option_id: number | null
    change_type: $Enums.product_history_change_type | null
    quantity_before: number | null
    quantity_after: number | null
    changed_at: Date | null
  }

  export type Product_historyCountAggregateOutputType = {
    id: number
    product_option_id: number
    change_type: number
    quantity_before: number
    quantity_after: number
    changed_at: number
    _all: number
  }


  export type Product_historyAvgAggregateInputType = {
    id?: true
    product_option_id?: true
    quantity_before?: true
    quantity_after?: true
  }

  export type Product_historySumAggregateInputType = {
    id?: true
    product_option_id?: true
    quantity_before?: true
    quantity_after?: true
  }

  export type Product_historyMinAggregateInputType = {
    id?: true
    product_option_id?: true
    change_type?: true
    quantity_before?: true
    quantity_after?: true
    changed_at?: true
  }

  export type Product_historyMaxAggregateInputType = {
    id?: true
    product_option_id?: true
    change_type?: true
    quantity_before?: true
    quantity_after?: true
    changed_at?: true
  }

  export type Product_historyCountAggregateInputType = {
    id?: true
    product_option_id?: true
    change_type?: true
    quantity_before?: true
    quantity_after?: true
    changed_at?: true
    _all?: true
  }

  export type Product_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_history to aggregate.
     */
    where?: product_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_histories to fetch.
     */
    orderBy?: product_historyOrderByWithRelationInput | product_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_histories
    **/
    _count?: true | Product_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_historyMaxAggregateInputType
  }

  export type GetProduct_historyAggregateType<T extends Product_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_history[P]>
      : GetScalarType<T[P], AggregateProduct_history[P]>
  }




  export type product_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_historyWhereInput
    orderBy?: product_historyOrderByWithAggregationInput | product_historyOrderByWithAggregationInput[]
    by: Product_historyScalarFieldEnum[] | Product_historyScalarFieldEnum
    having?: product_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_historyCountAggregateInputType | true
    _avg?: Product_historyAvgAggregateInputType
    _sum?: Product_historySumAggregateInputType
    _min?: Product_historyMinAggregateInputType
    _max?: Product_historyMaxAggregateInputType
  }

  export type Product_historyGroupByOutputType = {
    id: number
    product_option_id: number
    change_type: $Enums.product_history_change_type
    quantity_before: number
    quantity_after: number
    changed_at: Date
    _count: Product_historyCountAggregateOutputType | null
    _avg: Product_historyAvgAggregateOutputType | null
    _sum: Product_historySumAggregateOutputType | null
    _min: Product_historyMinAggregateOutputType | null
    _max: Product_historyMaxAggregateOutputType | null
  }

  type GetProduct_historyGroupByPayload<T extends product_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Product_historyGroupByOutputType[P]>
        }
      >
    >


  export type product_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_option_id?: boolean
    change_type?: boolean
    quantity_before?: boolean
    quantity_after?: boolean
    changed_at?: boolean
    product_option?: boolean | product_optionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_history"]>



  export type product_historySelectScalar = {
    id?: boolean
    product_option_id?: boolean
    change_type?: boolean
    quantity_before?: boolean
    quantity_after?: boolean
    changed_at?: boolean
  }

  export type product_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_option_id" | "change_type" | "quantity_before" | "quantity_after" | "changed_at", ExtArgs["result"]["product_history"]>
  export type product_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_option?: boolean | product_optionDefaultArgs<ExtArgs>
  }

  export type $product_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_history"
    objects: {
      product_option: Prisma.$product_optionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_option_id: number
      change_type: $Enums.product_history_change_type
      quantity_before: number
      quantity_after: number
      changed_at: Date
    }, ExtArgs["result"]["product_history"]>
    composites: {}
  }

  type product_historyGetPayload<S extends boolean | null | undefined | product_historyDefaultArgs> = $Result.GetResult<Prisma.$product_historyPayload, S>

  type product_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_historyCountAggregateInputType | true
    }

  export interface product_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_history'], meta: { name: 'product_history' } }
    /**
     * Find zero or one Product_history that matches the filter.
     * @param {product_historyFindUniqueArgs} args - Arguments to find a Product_history
     * @example
     * // Get one Product_history
     * const product_history = await prisma.product_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_historyFindUniqueArgs>(args: SelectSubset<T, product_historyFindUniqueArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_historyFindUniqueOrThrowArgs} args - Arguments to find a Product_history
     * @example
     * // Get one Product_history
     * const product_history = await prisma.product_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, product_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_historyFindFirstArgs} args - Arguments to find a Product_history
     * @example
     * // Get one Product_history
     * const product_history = await prisma.product_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_historyFindFirstArgs>(args?: SelectSubset<T, product_historyFindFirstArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_historyFindFirstOrThrowArgs} args - Arguments to find a Product_history
     * @example
     * // Get one Product_history
     * const product_history = await prisma.product_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, product_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_histories
     * const product_histories = await prisma.product_history.findMany()
     * 
     * // Get first 10 Product_histories
     * const product_histories = await prisma.product_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_historyWithIdOnly = await prisma.product_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_historyFindManyArgs>(args?: SelectSubset<T, product_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_history.
     * @param {product_historyCreateArgs} args - Arguments to create a Product_history.
     * @example
     * // Create one Product_history
     * const Product_history = await prisma.product_history.create({
     *   data: {
     *     // ... data to create a Product_history
     *   }
     * })
     * 
     */
    create<T extends product_historyCreateArgs>(args: SelectSubset<T, product_historyCreateArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_histories.
     * @param {product_historyCreateManyArgs} args - Arguments to create many Product_histories.
     * @example
     * // Create many Product_histories
     * const product_history = await prisma.product_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_historyCreateManyArgs>(args?: SelectSubset<T, product_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_history.
     * @param {product_historyDeleteArgs} args - Arguments to delete one Product_history.
     * @example
     * // Delete one Product_history
     * const Product_history = await prisma.product_history.delete({
     *   where: {
     *     // ... filter to delete one Product_history
     *   }
     * })
     * 
     */
    delete<T extends product_historyDeleteArgs>(args: SelectSubset<T, product_historyDeleteArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_history.
     * @param {product_historyUpdateArgs} args - Arguments to update one Product_history.
     * @example
     * // Update one Product_history
     * const product_history = await prisma.product_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_historyUpdateArgs>(args: SelectSubset<T, product_historyUpdateArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_histories.
     * @param {product_historyDeleteManyArgs} args - Arguments to filter Product_histories to delete.
     * @example
     * // Delete a few Product_histories
     * const { count } = await prisma.product_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_historyDeleteManyArgs>(args?: SelectSubset<T, product_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_histories
     * const product_history = await prisma.product_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_historyUpdateManyArgs>(args: SelectSubset<T, product_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_history.
     * @param {product_historyUpsertArgs} args - Arguments to update or create a Product_history.
     * @example
     * // Update or create a Product_history
     * const product_history = await prisma.product_history.upsert({
     *   create: {
     *     // ... data to create a Product_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_history we want to update
     *   }
     * })
     */
    upsert<T extends product_historyUpsertArgs>(args: SelectSubset<T, product_historyUpsertArgs<ExtArgs>>): Prisma__product_historyClient<$Result.GetResult<Prisma.$product_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_historyCountArgs} args - Arguments to filter Product_histories to count.
     * @example
     * // Count the number of Product_histories
     * const count = await prisma.product_history.count({
     *   where: {
     *     // ... the filter for the Product_histories we want to count
     *   }
     * })
    **/
    count<T extends product_historyCountArgs>(
      args?: Subset<T, product_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_historyAggregateArgs>(args: Subset<T, Product_historyAggregateArgs>): Prisma.PrismaPromise<GetProduct_historyAggregateType<T>>

    /**
     * Group by Product_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_historyGroupByArgs['orderBy'] }
        : { orderBy?: product_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_history model
   */
  readonly fields: product_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_option<T extends product_optionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, product_optionDefaultArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_history model
   */
  interface product_historyFieldRefs {
    readonly id: FieldRef<"product_history", 'Int'>
    readonly product_option_id: FieldRef<"product_history", 'Int'>
    readonly change_type: FieldRef<"product_history", 'product_history_change_type'>
    readonly quantity_before: FieldRef<"product_history", 'Int'>
    readonly quantity_after: FieldRef<"product_history", 'Int'>
    readonly changed_at: FieldRef<"product_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_history findUnique
   */
  export type product_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_history to fetch.
     */
    where: product_historyWhereUniqueInput
  }

  /**
   * product_history findUniqueOrThrow
   */
  export type product_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_history to fetch.
     */
    where: product_historyWhereUniqueInput
  }

  /**
   * product_history findFirst
   */
  export type product_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_history to fetch.
     */
    where?: product_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_histories to fetch.
     */
    orderBy?: product_historyOrderByWithRelationInput | product_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_histories.
     */
    cursor?: product_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_histories.
     */
    distinct?: Product_historyScalarFieldEnum | Product_historyScalarFieldEnum[]
  }

  /**
   * product_history findFirstOrThrow
   */
  export type product_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_history to fetch.
     */
    where?: product_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_histories to fetch.
     */
    orderBy?: product_historyOrderByWithRelationInput | product_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_histories.
     */
    cursor?: product_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_histories.
     */
    distinct?: Product_historyScalarFieldEnum | Product_historyScalarFieldEnum[]
  }

  /**
   * product_history findMany
   */
  export type product_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_histories to fetch.
     */
    where?: product_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_histories to fetch.
     */
    orderBy?: product_historyOrderByWithRelationInput | product_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_histories.
     */
    cursor?: product_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_histories.
     */
    skip?: number
    distinct?: Product_historyScalarFieldEnum | Product_historyScalarFieldEnum[]
  }

  /**
   * product_history create
   */
  export type product_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a product_history.
     */
    data: XOR<product_historyCreateInput, product_historyUncheckedCreateInput>
  }

  /**
   * product_history createMany
   */
  export type product_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_histories.
     */
    data: product_historyCreateManyInput | product_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_history update
   */
  export type product_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a product_history.
     */
    data: XOR<product_historyUpdateInput, product_historyUncheckedUpdateInput>
    /**
     * Choose, which product_history to update.
     */
    where: product_historyWhereUniqueInput
  }

  /**
   * product_history updateMany
   */
  export type product_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_histories.
     */
    data: XOR<product_historyUpdateManyMutationInput, product_historyUncheckedUpdateManyInput>
    /**
     * Filter which product_histories to update
     */
    where?: product_historyWhereInput
    /**
     * Limit how many product_histories to update.
     */
    limit?: number
  }

  /**
   * product_history upsert
   */
  export type product_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the product_history to update in case it exists.
     */
    where: product_historyWhereUniqueInput
    /**
     * In case the product_history found by the `where` argument doesn't exist, create a new product_history with this data.
     */
    create: XOR<product_historyCreateInput, product_historyUncheckedCreateInput>
    /**
     * In case the product_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_historyUpdateInput, product_historyUncheckedUpdateInput>
  }

  /**
   * product_history delete
   */
  export type product_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
    /**
     * Filter which product_history to delete.
     */
    where: product_historyWhereUniqueInput
  }

  /**
   * product_history deleteMany
   */
  export type product_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_histories to delete
     */
    where?: product_historyWhereInput
    /**
     * Limit how many product_histories to delete.
     */
    limit?: number
  }

  /**
   * product_history without action
   */
  export type product_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_history
     */
    select?: product_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_history
     */
    omit?: product_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_historyInclude<ExtArgs> | null
  }


  /**
   * Model setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingSumAggregateOutputType = {
    id: number | null
  }

  export type SettingMinAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
  }

  export type SettingMaxAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setting to aggregate.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type settingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingWhereInput
    orderBy?: settingOrderByWithAggregationInput | settingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: settingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: number
    key: string
    value: string
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends settingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type settingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>



  export type settingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
  }

  export type settingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value", ExtArgs["result"]["setting"]>

  export type $settingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type settingGetPayload<S extends boolean | null | undefined | settingDefaultArgs> = $Result.GetResult<Prisma.$settingPayload, S>

  type settingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface settingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['setting'], meta: { name: 'setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {settingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingFindUniqueArgs>(args: SelectSubset<T, settingFindUniqueArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingFindUniqueOrThrowArgs>(args: SelectSubset<T, settingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingFindFirstArgs>(args?: SelectSubset<T, settingFindFirstArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingFindFirstOrThrowArgs>(args?: SelectSubset<T, settingFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingFindManyArgs>(args?: SelectSubset<T, settingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {settingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends settingCreateArgs>(args: SelectSubset<T, settingCreateArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingCreateManyArgs>(args?: SelectSubset<T, settingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {settingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends settingDeleteArgs>(args: SelectSubset<T, settingDeleteArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {settingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingUpdateArgs>(args: SelectSubset<T, settingUpdateArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingDeleteManyArgs>(args?: SelectSubset<T, settingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingUpdateManyArgs>(args: SelectSubset<T, settingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {settingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends settingUpsertArgs>(args: SelectSubset<T, settingUpsertArgs<ExtArgs>>): Prisma__settingClient<$Result.GetResult<Prisma.$settingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingCountArgs>(
      args?: Subset<T, settingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends settingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingGroupByArgs['orderBy'] }
        : { orderBy?: settingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, settingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the setting model
   */
  readonly fields: settingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the setting model
   */
  interface settingFieldRefs {
    readonly id: FieldRef<"setting", 'Int'>
    readonly key: FieldRef<"setting", 'String'>
    readonly value: FieldRef<"setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * setting findUnique
   */
  export type settingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting findUniqueOrThrow
   */
  export type settingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting findFirst
   */
  export type settingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * setting findFirstOrThrow
   */
  export type settingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * Filter, which setting to fetch.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * setting findMany
   */
  export type settingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingOrderByWithRelationInput | settingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * setting create
   */
  export type settingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * The data needed to create a setting.
     */
    data: XOR<settingCreateInput, settingUncheckedCreateInput>
  }

  /**
   * setting createMany
   */
  export type settingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingCreateManyInput | settingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * setting update
   */
  export type settingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * The data needed to update a setting.
     */
    data: XOR<settingUpdateInput, settingUncheckedUpdateInput>
    /**
     * Choose, which setting to update.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting updateMany
   */
  export type settingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingUpdateManyMutationInput, settingUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * setting upsert
   */
  export type settingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * The filter to search for the setting to update in case it exists.
     */
    where: settingWhereUniqueInput
    /**
     * In case the setting found by the `where` argument doesn't exist, create a new setting with this data.
     */
    create: XOR<settingCreateInput, settingUncheckedCreateInput>
    /**
     * In case the setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingUpdateInput, settingUncheckedUpdateInput>
  }

  /**
   * setting delete
   */
  export type settingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
    /**
     * Filter which setting to delete.
     */
    where: settingWhereUniqueInput
  }

  /**
   * setting deleteMany
   */
  export type settingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * setting without action
   */
  export type settingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setting
     */
    select?: settingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setting
     */
    omit?: settingOmit<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    total: number | null
    status: $Enums.transaction_status | null
    created_at: Date | null
    updated_at: Date | null
    customer_id: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    total: number | null
    status: $Enums.transaction_status | null
    created_at: Date | null
    updated_at: Date | null
    customer_id: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    total: number
    status: number
    created_at: number
    updated_at: number
    customer_id: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    total?: true
    status?: true
    created_at?: true
    updated_at?: true
    customer_id?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    total?: true
    status?: true
    created_at?: true
    updated_at?: true
    customer_id?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    total?: true
    status?: true
    created_at?: true
    updated_at?: true
    customer_id?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    total: number
    status: $Enums.transaction_status
    created_at: Date
    updated_at: Date
    customer_id: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer_id?: boolean
    customer?: boolean | transaction$customerArgs<ExtArgs>
    transaction_item?: boolean | transaction$transaction_itemArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type transactionSelectScalar = {
    id?: boolean
    total?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer_id?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "status" | "created_at" | "updated_at" | "customer_id", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | transaction$customerArgs<ExtArgs>
    transaction_item?: boolean | transaction$transaction_itemArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      customer: Prisma.$userPayload<ExtArgs> | null
      transaction_item: Prisma.$transaction_itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      status: $Enums.transaction_status
      created_at: Date
      updated_at: Date
      customer_id: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends transaction$customerArgs<ExtArgs> = {}>(args?: Subset<T, transaction$customerArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaction_item<T extends transaction$transaction_itemArgs<ExtArgs> = {}>(args?: Subset<T, transaction$transaction_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'Int'>
    readonly total: FieldRef<"transaction", 'Int'>
    readonly status: FieldRef<"transaction", 'transaction_status'>
    readonly created_at: FieldRef<"transaction", 'DateTime'>
    readonly updated_at: FieldRef<"transaction", 'DateTime'>
    readonly customer_id: FieldRef<"transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction.customer
   */
  export type transaction$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * transaction.transaction_item
   */
  export type transaction$transaction_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    where?: transaction_itemWhereInput
    orderBy?: transaction_itemOrderByWithRelationInput | transaction_itemOrderByWithRelationInput[]
    cursor?: transaction_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_itemScalarFieldEnum | Transaction_itemScalarFieldEnum[]
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model transaction_item
   */

  export type AggregateTransaction_item = {
    _count: Transaction_itemCountAggregateOutputType | null
    _avg: Transaction_itemAvgAggregateOutputType | null
    _sum: Transaction_itemSumAggregateOutputType | null
    _min: Transaction_itemMinAggregateOutputType | null
    _max: Transaction_itemMaxAggregateOutputType | null
  }

  export type Transaction_itemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    product_option_id: number | null
    transaction_id: number | null
  }

  export type Transaction_itemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    product_option_id: number | null
    transaction_id: number | null
  }

  export type Transaction_itemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    product_option_id: number | null
    transaction_id: number | null
  }

  export type Transaction_itemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    product_option_id: number | null
    transaction_id: number | null
  }

  export type Transaction_itemCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    product_option_id: number
    transaction_id: number
    _all: number
  }


  export type Transaction_itemAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    product_option_id?: true
    transaction_id?: true
  }

  export type Transaction_itemSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    product_option_id?: true
    transaction_id?: true
  }

  export type Transaction_itemMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    product_option_id?: true
    transaction_id?: true
  }

  export type Transaction_itemMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    product_option_id?: true
    transaction_id?: true
  }

  export type Transaction_itemCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    product_option_id?: true
    transaction_id?: true
    _all?: true
  }

  export type Transaction_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_item to aggregate.
     */
    where?: transaction_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: transaction_itemOrderByWithRelationInput | transaction_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_items
    **/
    _count?: true | Transaction_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_itemMaxAggregateInputType
  }

  export type GetTransaction_itemAggregateType<T extends Transaction_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_item[P]>
      : GetScalarType<T[P], AggregateTransaction_item[P]>
  }




  export type transaction_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_itemWhereInput
    orderBy?: transaction_itemOrderByWithAggregationInput | transaction_itemOrderByWithAggregationInput[]
    by: Transaction_itemScalarFieldEnum[] | Transaction_itemScalarFieldEnum
    having?: transaction_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_itemCountAggregateInputType | true
    _avg?: Transaction_itemAvgAggregateInputType
    _sum?: Transaction_itemSumAggregateInputType
    _min?: Transaction_itemMinAggregateInputType
    _max?: Transaction_itemMaxAggregateInputType
  }

  export type Transaction_itemGroupByOutputType = {
    id: number
    quantity: number
    price: number
    product_option_id: number
    transaction_id: number
    _count: Transaction_itemCountAggregateOutputType | null
    _avg: Transaction_itemAvgAggregateOutputType | null
    _sum: Transaction_itemSumAggregateOutputType | null
    _min: Transaction_itemMinAggregateOutputType | null
    _max: Transaction_itemMaxAggregateOutputType | null
  }

  type GetTransaction_itemGroupByPayload<T extends transaction_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_itemGroupByOutputType[P]>
        }
      >
    >


  export type transaction_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    product_option_id?: boolean
    transaction_id?: boolean
    product_option?: boolean | product_optionDefaultArgs<ExtArgs>
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_item"]>



  export type transaction_itemSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    product_option_id?: boolean
    transaction_id?: boolean
  }

  export type transaction_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "product_option_id" | "transaction_id", ExtArgs["result"]["transaction_item"]>
  export type transaction_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_option?: boolean | product_optionDefaultArgs<ExtArgs>
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }

  export type $transaction_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_item"
    objects: {
      product_option: Prisma.$product_optionPayload<ExtArgs>
      transaction: Prisma.$transactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      price: number
      product_option_id: number
      transaction_id: number
    }, ExtArgs["result"]["transaction_item"]>
    composites: {}
  }

  type transaction_itemGetPayload<S extends boolean | null | undefined | transaction_itemDefaultArgs> = $Result.GetResult<Prisma.$transaction_itemPayload, S>

  type transaction_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_itemCountAggregateInputType | true
    }

  export interface transaction_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_item'], meta: { name: 'transaction_item' } }
    /**
     * Find zero or one Transaction_item that matches the filter.
     * @param {transaction_itemFindUniqueArgs} args - Arguments to find a Transaction_item
     * @example
     * // Get one Transaction_item
     * const transaction_item = await prisma.transaction_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_itemFindUniqueArgs>(args: SelectSubset<T, transaction_itemFindUniqueArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_itemFindUniqueOrThrowArgs} args - Arguments to find a Transaction_item
     * @example
     * // Get one Transaction_item
     * const transaction_item = await prisma.transaction_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemFindFirstArgs} args - Arguments to find a Transaction_item
     * @example
     * // Get one Transaction_item
     * const transaction_item = await prisma.transaction_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_itemFindFirstArgs>(args?: SelectSubset<T, transaction_itemFindFirstArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemFindFirstOrThrowArgs} args - Arguments to find a Transaction_item
     * @example
     * // Get one Transaction_item
     * const transaction_item = await prisma.transaction_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_items
     * const transaction_items = await prisma.transaction_item.findMany()
     * 
     * // Get first 10 Transaction_items
     * const transaction_items = await prisma.transaction_item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_itemWithIdOnly = await prisma.transaction_item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaction_itemFindManyArgs>(args?: SelectSubset<T, transaction_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_item.
     * @param {transaction_itemCreateArgs} args - Arguments to create a Transaction_item.
     * @example
     * // Create one Transaction_item
     * const Transaction_item = await prisma.transaction_item.create({
     *   data: {
     *     // ... data to create a Transaction_item
     *   }
     * })
     * 
     */
    create<T extends transaction_itemCreateArgs>(args: SelectSubset<T, transaction_itemCreateArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_items.
     * @param {transaction_itemCreateManyArgs} args - Arguments to create many Transaction_items.
     * @example
     * // Create many Transaction_items
     * const transaction_item = await prisma.transaction_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_itemCreateManyArgs>(args?: SelectSubset<T, transaction_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction_item.
     * @param {transaction_itemDeleteArgs} args - Arguments to delete one Transaction_item.
     * @example
     * // Delete one Transaction_item
     * const Transaction_item = await prisma.transaction_item.delete({
     *   where: {
     *     // ... filter to delete one Transaction_item
     *   }
     * })
     * 
     */
    delete<T extends transaction_itemDeleteArgs>(args: SelectSubset<T, transaction_itemDeleteArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_item.
     * @param {transaction_itemUpdateArgs} args - Arguments to update one Transaction_item.
     * @example
     * // Update one Transaction_item
     * const transaction_item = await prisma.transaction_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_itemUpdateArgs>(args: SelectSubset<T, transaction_itemUpdateArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_items.
     * @param {transaction_itemDeleteManyArgs} args - Arguments to filter Transaction_items to delete.
     * @example
     * // Delete a few Transaction_items
     * const { count } = await prisma.transaction_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_itemDeleteManyArgs>(args?: SelectSubset<T, transaction_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_items
     * const transaction_item = await prisma.transaction_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_itemUpdateManyArgs>(args: SelectSubset<T, transaction_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction_item.
     * @param {transaction_itemUpsertArgs} args - Arguments to update or create a Transaction_item.
     * @example
     * // Update or create a Transaction_item
     * const transaction_item = await prisma.transaction_item.upsert({
     *   create: {
     *     // ... data to create a Transaction_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_item we want to update
     *   }
     * })
     */
    upsert<T extends transaction_itemUpsertArgs>(args: SelectSubset<T, transaction_itemUpsertArgs<ExtArgs>>): Prisma__transaction_itemClient<$Result.GetResult<Prisma.$transaction_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemCountArgs} args - Arguments to filter Transaction_items to count.
     * @example
     * // Count the number of Transaction_items
     * const count = await prisma.transaction_item.count({
     *   where: {
     *     // ... the filter for the Transaction_items we want to count
     *   }
     * })
    **/
    count<T extends transaction_itemCountArgs>(
      args?: Subset<T, transaction_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaction_itemAggregateArgs>(args: Subset<T, Transaction_itemAggregateArgs>): Prisma.PrismaPromise<GetTransaction_itemAggregateType<T>>

    /**
     * Group by Transaction_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaction_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_itemGroupByArgs['orderBy'] }
        : { orderBy?: transaction_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaction_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_item model
   */
  readonly fields: transaction_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_option<T extends product_optionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, product_optionDefaultArgs<ExtArgs>>): Prisma__product_optionClient<$Result.GetResult<Prisma.$product_optionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction_item model
   */
  interface transaction_itemFieldRefs {
    readonly id: FieldRef<"transaction_item", 'Int'>
    readonly quantity: FieldRef<"transaction_item", 'Int'>
    readonly price: FieldRef<"transaction_item", 'Int'>
    readonly product_option_id: FieldRef<"transaction_item", 'Int'>
    readonly transaction_id: FieldRef<"transaction_item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transaction_item findUnique
   */
  export type transaction_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * Filter, which transaction_item to fetch.
     */
    where: transaction_itemWhereUniqueInput
  }

  /**
   * transaction_item findUniqueOrThrow
   */
  export type transaction_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * Filter, which transaction_item to fetch.
     */
    where: transaction_itemWhereUniqueInput
  }

  /**
   * transaction_item findFirst
   */
  export type transaction_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * Filter, which transaction_item to fetch.
     */
    where?: transaction_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: transaction_itemOrderByWithRelationInput | transaction_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_items.
     */
    cursor?: transaction_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_items.
     */
    distinct?: Transaction_itemScalarFieldEnum | Transaction_itemScalarFieldEnum[]
  }

  /**
   * transaction_item findFirstOrThrow
   */
  export type transaction_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * Filter, which transaction_item to fetch.
     */
    where?: transaction_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: transaction_itemOrderByWithRelationInput | transaction_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_items.
     */
    cursor?: transaction_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_items.
     */
    distinct?: Transaction_itemScalarFieldEnum | Transaction_itemScalarFieldEnum[]
  }

  /**
   * transaction_item findMany
   */
  export type transaction_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * Filter, which transaction_items to fetch.
     */
    where?: transaction_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: transaction_itemOrderByWithRelationInput | transaction_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_items.
     */
    cursor?: transaction_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_items.
     */
    skip?: number
    distinct?: Transaction_itemScalarFieldEnum | Transaction_itemScalarFieldEnum[]
  }

  /**
   * transaction_item create
   */
  export type transaction_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_item.
     */
    data: XOR<transaction_itemCreateInput, transaction_itemUncheckedCreateInput>
  }

  /**
   * transaction_item createMany
   */
  export type transaction_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_items.
     */
    data: transaction_itemCreateManyInput | transaction_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_item update
   */
  export type transaction_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_item.
     */
    data: XOR<transaction_itemUpdateInput, transaction_itemUncheckedUpdateInput>
    /**
     * Choose, which transaction_item to update.
     */
    where: transaction_itemWhereUniqueInput
  }

  /**
   * transaction_item updateMany
   */
  export type transaction_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_items.
     */
    data: XOR<transaction_itemUpdateManyMutationInput, transaction_itemUncheckedUpdateManyInput>
    /**
     * Filter which transaction_items to update
     */
    where?: transaction_itemWhereInput
    /**
     * Limit how many transaction_items to update.
     */
    limit?: number
  }

  /**
   * transaction_item upsert
   */
  export type transaction_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_item to update in case it exists.
     */
    where: transaction_itemWhereUniqueInput
    /**
     * In case the transaction_item found by the `where` argument doesn't exist, create a new transaction_item with this data.
     */
    create: XOR<transaction_itemCreateInput, transaction_itemUncheckedCreateInput>
    /**
     * In case the transaction_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_itemUpdateInput, transaction_itemUncheckedUpdateInput>
  }

  /**
   * transaction_item delete
   */
  export type transaction_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
    /**
     * Filter which transaction_item to delete.
     */
    where: transaction_itemWhereUniqueInput
  }

  /**
   * transaction_item deleteMany
   */
  export type transaction_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_items to delete
     */
    where?: transaction_itemWhereInput
    /**
     * Limit how many transaction_items to delete.
     */
    limit?: number
  }

  /**
   * transaction_item without action
   */
  export type transaction_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item
     */
    select?: transaction_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_item
     */
    omit?: transaction_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_itemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    avatar: 'avatar',
    last_login: 'last_login'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuditScalarFieldEnum: {
    id: 'id',
    action: 'action',
    action_url: 'action_url',
    ip_address: 'ip_address',
    created_at: 'created_at',
    user_id: 'user_id'
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const PreorderScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    product_option_id: 'product_option_id',
    customer_id: 'customer_id'
  };

  export type PreorderScalarFieldEnum = (typeof PreorderScalarFieldEnum)[keyof typeof PreorderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    category_id: 'category_id',
    inventoryId: 'inventoryId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const Product_variantScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Product_variantScalarFieldEnum = (typeof Product_variantScalarFieldEnum)[keyof typeof Product_variantScalarFieldEnum]


  export const Product_optionScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    image: 'image',
    price: 'price',
    cost: 'cost',
    stock: 'stock',
    option_value: 'option_value',
    variant_id: 'variant_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Product_optionScalarFieldEnum = (typeof Product_optionScalarFieldEnum)[keyof typeof Product_optionScalarFieldEnum]


  export const Product_historyScalarFieldEnum: {
    id: 'id',
    product_option_id: 'product_option_id',
    change_type: 'change_type',
    quantity_before: 'quantity_before',
    quantity_after: 'quantity_after',
    changed_at: 'changed_at'
  };

  export type Product_historyScalarFieldEnum = (typeof Product_historyScalarFieldEnum)[keyof typeof Product_historyScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    total: 'total',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    customer_id: 'customer_id'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const Transaction_itemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    product_option_id: 'product_option_id',
    transaction_id: 'transaction_id'
  };

  export type Transaction_itemScalarFieldEnum = (typeof Transaction_itemScalarFieldEnum)[keyof typeof Transaction_itemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const auditOrderByRelevanceFieldEnum: {
    action: 'action',
    action_url: 'action_url',
    ip_address: 'ip_address',
    user_id: 'user_id'
  };

  export type auditOrderByRelevanceFieldEnum = (typeof auditOrderByRelevanceFieldEnum)[keyof typeof auditOrderByRelevanceFieldEnum]


  export const categoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type categoryOrderByRelevanceFieldEnum = (typeof categoryOrderByRelevanceFieldEnum)[keyof typeof categoryOrderByRelevanceFieldEnum]


  export const inventoryOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image'
  };

  export type inventoryOrderByRelevanceFieldEnum = (typeof inventoryOrderByRelevanceFieldEnum)[keyof typeof inventoryOrderByRelevanceFieldEnum]


  export const preorderOrderByRelevanceFieldEnum: {
    customer_id: 'customer_id'
  };

  export type preorderOrderByRelevanceFieldEnum = (typeof preorderOrderByRelevanceFieldEnum)[keyof typeof preorderOrderByRelevanceFieldEnum]


  export const productOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image'
  };

  export type productOrderByRelevanceFieldEnum = (typeof productOrderByRelevanceFieldEnum)[keyof typeof productOrderByRelevanceFieldEnum]


  export const product_variantOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type product_variantOrderByRelevanceFieldEnum = (typeof product_variantOrderByRelevanceFieldEnum)[keyof typeof product_variantOrderByRelevanceFieldEnum]


  export const product_optionOrderByRelevanceFieldEnum: {
    sku: 'sku',
    image: 'image',
    option_value: 'option_value'
  };

  export type product_optionOrderByRelevanceFieldEnum = (typeof product_optionOrderByRelevanceFieldEnum)[keyof typeof product_optionOrderByRelevanceFieldEnum]


  export const settingOrderByRelevanceFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type settingOrderByRelevanceFieldEnum = (typeof settingOrderByRelevanceFieldEnum)[keyof typeof settingOrderByRelevanceFieldEnum]


  export const transactionOrderByRelevanceFieldEnum: {
    customer_id: 'customer_id'
  };

  export type transactionOrderByRelevanceFieldEnum = (typeof transactionOrderByRelevanceFieldEnum)[keyof typeof transactionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'preorder_status'
   */
  export type Enumpreorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'preorder_status'>
    


  /**
   * Reference to a field of type 'product_history_change_type'
   */
  export type Enumproduct_history_change_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_history_change_type'>
    


  /**
   * Reference to a field of type 'transaction_status'
   */
  export type Enumtransaction_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    avatar?: StringNullableFilter<"user"> | string | null
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    audit?: AuditListRelationFilter
    preorder?: PreorderListRelationFilter
    transaction?: TransactionListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    audit?: auditOrderByRelationAggregateInput
    preorder?: preorderOrderByRelationAggregateInput
    transaction?: transactionOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    avatar?: StringNullableFilter<"user"> | string | null
    last_login?: DateTimeNullableFilter<"user"> | Date | string | null
    audit?: AuditListRelationFilter
    preorder?: PreorderListRelationFilter
    transaction?: TransactionListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type auditWhereInput = {
    AND?: auditWhereInput | auditWhereInput[]
    OR?: auditWhereInput[]
    NOT?: auditWhereInput | auditWhereInput[]
    id?: IntFilter<"audit"> | number
    action?: StringFilter<"audit"> | string
    action_url?: StringNullableFilter<"audit"> | string | null
    ip_address?: StringNullableFilter<"audit"> | string | null
    created_at?: DateTimeFilter<"audit"> | Date | string
    user_id?: StringFilter<"audit"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type auditOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    action_url?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: auditOrderByRelevanceInput
  }

  export type auditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: auditWhereInput | auditWhereInput[]
    OR?: auditWhereInput[]
    NOT?: auditWhereInput | auditWhereInput[]
    action?: StringFilter<"audit"> | string
    action_url?: StringNullableFilter<"audit"> | string | null
    ip_address?: StringNullableFilter<"audit"> | string | null
    created_at?: DateTimeFilter<"audit"> | Date | string
    user_id?: StringFilter<"audit"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type auditOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    action_url?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    _count?: auditCountOrderByAggregateInput
    _avg?: auditAvgOrderByAggregateInput
    _max?: auditMaxOrderByAggregateInput
    _min?: auditMinOrderByAggregateInput
    _sum?: auditSumOrderByAggregateInput
  }

  export type auditScalarWhereWithAggregatesInput = {
    AND?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[]
    OR?: auditScalarWhereWithAggregatesInput[]
    NOT?: auditScalarWhereWithAggregatesInput | auditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"audit"> | number
    action?: StringWithAggregatesFilter<"audit"> | string
    action_url?: StringNullableWithAggregatesFilter<"audit"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"audit"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"audit"> | Date | string
    user_id?: StringWithAggregatesFilter<"audit"> | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    created_at?: DateTimeFilter<"category"> | Date | string
    updated_at?: DateTimeFilter<"category"> | Date | string
    product?: ProductListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: productOrderByRelationAggregateInput
    _relevance?: categoryOrderByRelevanceInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    created_at?: DateTimeFilter<"category"> | Date | string
    updated_at?: DateTimeFilter<"category"> | Date | string
    product?: ProductListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    created_at?: DateTimeWithAggregatesFilter<"category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"category"> | Date | string
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    id?: IntFilter<"inventory"> | number
    name?: StringFilter<"inventory"> | string
    image?: StringNullableFilter<"inventory"> | string | null
    created_at?: DateTimeFilter<"inventory"> | Date | string
    updated_at?: DateTimeFilter<"inventory"> | Date | string
    product?: ProductListRelationFilter
  }

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: productOrderByRelationAggregateInput
    _relevance?: inventoryOrderByRelevanceInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    name?: StringFilter<"inventory"> | string
    image?: StringNullableFilter<"inventory"> | string | null
    created_at?: DateTimeFilter<"inventory"> | Date | string
    updated_at?: DateTimeFilter<"inventory"> | Date | string
    product?: ProductListRelationFilter
  }, "id">

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventory"> | number
    name?: StringWithAggregatesFilter<"inventory"> | string
    image?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"inventory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"inventory"> | Date | string
  }

  export type preorderWhereInput = {
    AND?: preorderWhereInput | preorderWhereInput[]
    OR?: preorderWhereInput[]
    NOT?: preorderWhereInput | preorderWhereInput[]
    id?: IntFilter<"preorder"> | number
    quantity?: IntFilter<"preorder"> | number
    status?: Enumpreorder_statusFilter<"preorder"> | $Enums.preorder_status
    created_at?: DateTimeFilter<"preorder"> | Date | string
    updated_at?: DateTimeFilter<"preorder"> | Date | string
    product_option_id?: IntFilter<"preorder"> | number
    customer_id?: StringFilter<"preorder"> | string
    product_option?: XOR<Product_optionScalarRelationFilter, product_optionWhereInput>
    customer?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type preorderOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_option_id?: SortOrder
    customer_id?: SortOrder
    product_option?: product_optionOrderByWithRelationInput
    customer?: userOrderByWithRelationInput
    _relevance?: preorderOrderByRelevanceInput
  }

  export type preorderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: preorderWhereInput | preorderWhereInput[]
    OR?: preorderWhereInput[]
    NOT?: preorderWhereInput | preorderWhereInput[]
    quantity?: IntFilter<"preorder"> | number
    status?: Enumpreorder_statusFilter<"preorder"> | $Enums.preorder_status
    created_at?: DateTimeFilter<"preorder"> | Date | string
    updated_at?: DateTimeFilter<"preorder"> | Date | string
    product_option_id?: IntFilter<"preorder"> | number
    customer_id?: StringFilter<"preorder"> | string
    product_option?: XOR<Product_optionScalarRelationFilter, product_optionWhereInput>
    customer?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type preorderOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_option_id?: SortOrder
    customer_id?: SortOrder
    _count?: preorderCountOrderByAggregateInput
    _avg?: preorderAvgOrderByAggregateInput
    _max?: preorderMaxOrderByAggregateInput
    _min?: preorderMinOrderByAggregateInput
    _sum?: preorderSumOrderByAggregateInput
  }

  export type preorderScalarWhereWithAggregatesInput = {
    AND?: preorderScalarWhereWithAggregatesInput | preorderScalarWhereWithAggregatesInput[]
    OR?: preorderScalarWhereWithAggregatesInput[]
    NOT?: preorderScalarWhereWithAggregatesInput | preorderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"preorder"> | number
    quantity?: IntWithAggregatesFilter<"preorder"> | number
    status?: Enumpreorder_statusWithAggregatesFilter<"preorder"> | $Enums.preorder_status
    created_at?: DateTimeWithAggregatesFilter<"preorder"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"preorder"> | Date | string
    product_option_id?: IntWithAggregatesFilter<"preorder"> | number
    customer_id?: StringWithAggregatesFilter<"preorder"> | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    image?: StringNullableFilter<"product"> | string | null
    category_id?: IntNullableFilter<"product"> | number | null
    inventoryId?: IntNullableFilter<"product"> | number | null
    created_at?: DateTimeFilter<"product"> | Date | string
    updated_at?: DateTimeFilter<"product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    variants?: Product_variantListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    inventoryId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: categoryOrderByWithRelationInput
    inventory?: inventoryOrderByWithRelationInput
    variants?: product_variantOrderByRelationAggregateInput
    _relevance?: productOrderByRelevanceInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    image?: StringNullableFilter<"product"> | string | null
    category_id?: IntNullableFilter<"product"> | number | null
    inventoryId?: IntNullableFilter<"product"> | number | null
    created_at?: DateTimeFilter<"product"> | Date | string
    updated_at?: DateTimeFilter<"product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    variants?: Product_variantListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    inventoryId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    image?: StringNullableWithAggregatesFilter<"product"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"product"> | number | null
    inventoryId?: IntNullableWithAggregatesFilter<"product"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"product"> | Date | string
  }

  export type product_variantWhereInput = {
    AND?: product_variantWhereInput | product_variantWhereInput[]
    OR?: product_variantWhereInput[]
    NOT?: product_variantWhereInput | product_variantWhereInput[]
    id?: IntFilter<"product_variant"> | number
    product_id?: IntFilter<"product_variant"> | number
    name?: StringFilter<"product_variant"> | string
    created_at?: DateTimeFilter<"product_variant"> | Date | string
    updated_at?: DateTimeFilter<"product_variant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    options?: Product_optionListRelationFilter
  }

  export type product_variantOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: productOrderByWithRelationInput
    options?: product_optionOrderByRelationAggregateInput
    _relevance?: product_variantOrderByRelevanceInput
  }

  export type product_variantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: product_variantWhereInput | product_variantWhereInput[]
    OR?: product_variantWhereInput[]
    NOT?: product_variantWhereInput | product_variantWhereInput[]
    product_id?: IntFilter<"product_variant"> | number
    created_at?: DateTimeFilter<"product_variant"> | Date | string
    updated_at?: DateTimeFilter<"product_variant"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    options?: Product_optionListRelationFilter
  }, "id" | "name">

  export type product_variantOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: product_variantCountOrderByAggregateInput
    _avg?: product_variantAvgOrderByAggregateInput
    _max?: product_variantMaxOrderByAggregateInput
    _min?: product_variantMinOrderByAggregateInput
    _sum?: product_variantSumOrderByAggregateInput
  }

  export type product_variantScalarWhereWithAggregatesInput = {
    AND?: product_variantScalarWhereWithAggregatesInput | product_variantScalarWhereWithAggregatesInput[]
    OR?: product_variantScalarWhereWithAggregatesInput[]
    NOT?: product_variantScalarWhereWithAggregatesInput | product_variantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_variant"> | number
    product_id?: IntWithAggregatesFilter<"product_variant"> | number
    name?: StringWithAggregatesFilter<"product_variant"> | string
    created_at?: DateTimeWithAggregatesFilter<"product_variant"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"product_variant"> | Date | string
  }

  export type product_optionWhereInput = {
    AND?: product_optionWhereInput | product_optionWhereInput[]
    OR?: product_optionWhereInput[]
    NOT?: product_optionWhereInput | product_optionWhereInput[]
    id?: IntFilter<"product_option"> | number
    sku?: StringFilter<"product_option"> | string
    image?: StringNullableFilter<"product_option"> | string | null
    price?: IntFilter<"product_option"> | number
    cost?: IntFilter<"product_option"> | number
    stock?: IntFilter<"product_option"> | number
    option_value?: StringFilter<"product_option"> | string
    variant_id?: IntFilter<"product_option"> | number
    created_at?: DateTimeFilter<"product_option"> | Date | string
    updated_at?: DateTimeFilter<"product_option"> | Date | string
    variant?: XOR<Product_variantScalarRelationFilter, product_variantWhereInput>
    transaction_items?: Transaction_itemListRelationFilter
    product_history?: Product_historyListRelationFilter
    preorder?: PreorderListRelationFilter
  }

  export type product_optionOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    cost?: SortOrder
    stock?: SortOrder
    option_value?: SortOrder
    variant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    variant?: product_variantOrderByWithRelationInput
    transaction_items?: transaction_itemOrderByRelationAggregateInput
    product_history?: product_historyOrderByRelationAggregateInput
    preorder?: preorderOrderByRelationAggregateInput
    _relevance?: product_optionOrderByRelevanceInput
  }

  export type product_optionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: product_optionWhereInput | product_optionWhereInput[]
    OR?: product_optionWhereInput[]
    NOT?: product_optionWhereInput | product_optionWhereInput[]
    image?: StringNullableFilter<"product_option"> | string | null
    price?: IntFilter<"product_option"> | number
    cost?: IntFilter<"product_option"> | number
    stock?: IntFilter<"product_option"> | number
    option_value?: StringFilter<"product_option"> | string
    variant_id?: IntFilter<"product_option"> | number
    created_at?: DateTimeFilter<"product_option"> | Date | string
    updated_at?: DateTimeFilter<"product_option"> | Date | string
    variant?: XOR<Product_variantScalarRelationFilter, product_variantWhereInput>
    transaction_items?: Transaction_itemListRelationFilter
    product_history?: Product_historyListRelationFilter
    preorder?: PreorderListRelationFilter
  }, "id" | "sku">

  export type product_optionOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    cost?: SortOrder
    stock?: SortOrder
    option_value?: SortOrder
    variant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: product_optionCountOrderByAggregateInput
    _avg?: product_optionAvgOrderByAggregateInput
    _max?: product_optionMaxOrderByAggregateInput
    _min?: product_optionMinOrderByAggregateInput
    _sum?: product_optionSumOrderByAggregateInput
  }

  export type product_optionScalarWhereWithAggregatesInput = {
    AND?: product_optionScalarWhereWithAggregatesInput | product_optionScalarWhereWithAggregatesInput[]
    OR?: product_optionScalarWhereWithAggregatesInput[]
    NOT?: product_optionScalarWhereWithAggregatesInput | product_optionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_option"> | number
    sku?: StringWithAggregatesFilter<"product_option"> | string
    image?: StringNullableWithAggregatesFilter<"product_option"> | string | null
    price?: IntWithAggregatesFilter<"product_option"> | number
    cost?: IntWithAggregatesFilter<"product_option"> | number
    stock?: IntWithAggregatesFilter<"product_option"> | number
    option_value?: StringWithAggregatesFilter<"product_option"> | string
    variant_id?: IntWithAggregatesFilter<"product_option"> | number
    created_at?: DateTimeWithAggregatesFilter<"product_option"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"product_option"> | Date | string
  }

  export type product_historyWhereInput = {
    AND?: product_historyWhereInput | product_historyWhereInput[]
    OR?: product_historyWhereInput[]
    NOT?: product_historyWhereInput | product_historyWhereInput[]
    id?: IntFilter<"product_history"> | number
    product_option_id?: IntFilter<"product_history"> | number
    change_type?: Enumproduct_history_change_typeFilter<"product_history"> | $Enums.product_history_change_type
    quantity_before?: IntFilter<"product_history"> | number
    quantity_after?: IntFilter<"product_history"> | number
    changed_at?: DateTimeFilter<"product_history"> | Date | string
    product_option?: XOR<Product_optionScalarRelationFilter, product_optionWhereInput>
  }

  export type product_historyOrderByWithRelationInput = {
    id?: SortOrder
    product_option_id?: SortOrder
    change_type?: SortOrder
    quantity_before?: SortOrder
    quantity_after?: SortOrder
    changed_at?: SortOrder
    product_option?: product_optionOrderByWithRelationInput
  }

  export type product_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_historyWhereInput | product_historyWhereInput[]
    OR?: product_historyWhereInput[]
    NOT?: product_historyWhereInput | product_historyWhereInput[]
    product_option_id?: IntFilter<"product_history"> | number
    change_type?: Enumproduct_history_change_typeFilter<"product_history"> | $Enums.product_history_change_type
    quantity_before?: IntFilter<"product_history"> | number
    quantity_after?: IntFilter<"product_history"> | number
    changed_at?: DateTimeFilter<"product_history"> | Date | string
    product_option?: XOR<Product_optionScalarRelationFilter, product_optionWhereInput>
  }, "id">

  export type product_historyOrderByWithAggregationInput = {
    id?: SortOrder
    product_option_id?: SortOrder
    change_type?: SortOrder
    quantity_before?: SortOrder
    quantity_after?: SortOrder
    changed_at?: SortOrder
    _count?: product_historyCountOrderByAggregateInput
    _avg?: product_historyAvgOrderByAggregateInput
    _max?: product_historyMaxOrderByAggregateInput
    _min?: product_historyMinOrderByAggregateInput
    _sum?: product_historySumOrderByAggregateInput
  }

  export type product_historyScalarWhereWithAggregatesInput = {
    AND?: product_historyScalarWhereWithAggregatesInput | product_historyScalarWhereWithAggregatesInput[]
    OR?: product_historyScalarWhereWithAggregatesInput[]
    NOT?: product_historyScalarWhereWithAggregatesInput | product_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_history"> | number
    product_option_id?: IntWithAggregatesFilter<"product_history"> | number
    change_type?: Enumproduct_history_change_typeWithAggregatesFilter<"product_history"> | $Enums.product_history_change_type
    quantity_before?: IntWithAggregatesFilter<"product_history"> | number
    quantity_after?: IntWithAggregatesFilter<"product_history"> | number
    changed_at?: DateTimeWithAggregatesFilter<"product_history"> | Date | string
  }

  export type settingWhereInput = {
    AND?: settingWhereInput | settingWhereInput[]
    OR?: settingWhereInput[]
    NOT?: settingWhereInput | settingWhereInput[]
    id?: IntFilter<"setting"> | number
    key?: StringFilter<"setting"> | string
    value?: StringFilter<"setting"> | string
  }

  export type settingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _relevance?: settingOrderByRelevanceInput
  }

  export type settingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: settingWhereInput | settingWhereInput[]
    OR?: settingWhereInput[]
    NOT?: settingWhereInput | settingWhereInput[]
    value?: StringFilter<"setting"> | string
  }, "id" | "key">

  export type settingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: settingCountOrderByAggregateInput
    _avg?: settingAvgOrderByAggregateInput
    _max?: settingMaxOrderByAggregateInput
    _min?: settingMinOrderByAggregateInput
    _sum?: settingSumOrderByAggregateInput
  }

  export type settingScalarWhereWithAggregatesInput = {
    AND?: settingScalarWhereWithAggregatesInput | settingScalarWhereWithAggregatesInput[]
    OR?: settingScalarWhereWithAggregatesInput[]
    NOT?: settingScalarWhereWithAggregatesInput | settingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"setting"> | number
    key?: StringWithAggregatesFilter<"setting"> | string
    value?: StringWithAggregatesFilter<"setting"> | string
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: IntFilter<"transaction"> | number
    total?: IntFilter<"transaction"> | number
    status?: Enumtransaction_statusFilter<"transaction"> | $Enums.transaction_status
    created_at?: DateTimeFilter<"transaction"> | Date | string
    updated_at?: DateTimeFilter<"transaction"> | Date | string
    customer_id?: StringNullableFilter<"transaction"> | string | null
    customer?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    transaction_item?: Transaction_itemListRelationFilter
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    customer?: userOrderByWithRelationInput
    transaction_item?: transaction_itemOrderByRelationAggregateInput
    _relevance?: transactionOrderByRelevanceInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    total?: IntFilter<"transaction"> | number
    status?: Enumtransaction_statusFilter<"transaction"> | $Enums.transaction_status
    created_at?: DateTimeFilter<"transaction"> | Date | string
    updated_at?: DateTimeFilter<"transaction"> | Date | string
    customer_id?: StringNullableFilter<"transaction"> | string | null
    customer?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    transaction_item?: Transaction_itemListRelationFilter
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction"> | number
    total?: IntWithAggregatesFilter<"transaction"> | number
    status?: Enumtransaction_statusWithAggregatesFilter<"transaction"> | $Enums.transaction_status
    created_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    customer_id?: StringNullableWithAggregatesFilter<"transaction"> | string | null
  }

  export type transaction_itemWhereInput = {
    AND?: transaction_itemWhereInput | transaction_itemWhereInput[]
    OR?: transaction_itemWhereInput[]
    NOT?: transaction_itemWhereInput | transaction_itemWhereInput[]
    id?: IntFilter<"transaction_item"> | number
    quantity?: IntFilter<"transaction_item"> | number
    price?: IntFilter<"transaction_item"> | number
    product_option_id?: IntFilter<"transaction_item"> | number
    transaction_id?: IntFilter<"transaction_item"> | number
    product_option?: XOR<Product_optionScalarRelationFilter, product_optionWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
  }

  export type transaction_itemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    product_option_id?: SortOrder
    transaction_id?: SortOrder
    product_option?: product_optionOrderByWithRelationInput
    transaction?: transactionOrderByWithRelationInput
  }

  export type transaction_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaction_itemWhereInput | transaction_itemWhereInput[]
    OR?: transaction_itemWhereInput[]
    NOT?: transaction_itemWhereInput | transaction_itemWhereInput[]
    quantity?: IntFilter<"transaction_item"> | number
    price?: IntFilter<"transaction_item"> | number
    product_option_id?: IntFilter<"transaction_item"> | number
    transaction_id?: IntFilter<"transaction_item"> | number
    product_option?: XOR<Product_optionScalarRelationFilter, product_optionWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
  }, "id">

  export type transaction_itemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    product_option_id?: SortOrder
    transaction_id?: SortOrder
    _count?: transaction_itemCountOrderByAggregateInput
    _avg?: transaction_itemAvgOrderByAggregateInput
    _max?: transaction_itemMaxOrderByAggregateInput
    _min?: transaction_itemMinOrderByAggregateInput
    _sum?: transaction_itemSumOrderByAggregateInput
  }

  export type transaction_itemScalarWhereWithAggregatesInput = {
    AND?: transaction_itemScalarWhereWithAggregatesInput | transaction_itemScalarWhereWithAggregatesInput[]
    OR?: transaction_itemScalarWhereWithAggregatesInput[]
    NOT?: transaction_itemScalarWhereWithAggregatesInput | transaction_itemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction_item"> | number
    quantity?: IntWithAggregatesFilter<"transaction_item"> | number
    price?: IntWithAggregatesFilter<"transaction_item"> | number
    product_option_id?: IntWithAggregatesFilter<"transaction_item"> | number
    transaction_id?: IntWithAggregatesFilter<"transaction_item"> | number
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    audit?: auditCreateNestedManyWithoutUserInput
    preorder?: preorderCreateNestedManyWithoutCustomerInput
    transaction?: transactionCreateNestedManyWithoutCustomerInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    preorder?: preorderUncheckedCreateNestedManyWithoutCustomerInput
    transaction?: transactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit?: auditUpdateManyWithoutUserNestedInput
    preorder?: preorderUpdateManyWithoutCustomerNestedInput
    transaction?: transactionUpdateManyWithoutCustomerNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    preorder?: preorderUncheckedUpdateManyWithoutCustomerNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditCreateInput = {
    action: string
    action_url?: string | null
    ip_address?: string | null
    created_at?: Date | string
    user: userCreateNestedOneWithoutAuditInput
  }

  export type auditUncheckedCreateInput = {
    id?: number
    action: string
    action_url?: string | null
    ip_address?: string | null
    created_at?: Date | string
    user_id: string
  }

  export type auditUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_url?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutAuditNestedInput
  }

  export type auditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_url?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type auditCreateManyInput = {
    id?: number
    action: string
    action_url?: string | null
    ip_address?: string | null
    created_at?: Date | string
    user_id: string
  }

  export type auditUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_url?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_url?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    product?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    product?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryCreateInput = {
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product?: productCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    id?: number
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product?: productUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateManyInput = {
    id?: number
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type inventoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type preorderCreateInput = {
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    product_option: product_optionCreateNestedOneWithoutPreorderInput
    customer: userCreateNestedOneWithoutPreorderInput
  }

  export type preorderUncheckedCreateInput = {
    id?: number
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    product_option_id: number
    customer_id: string
  }

  export type preorderUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_option?: product_optionUpdateOneRequiredWithoutPreorderNestedInput
    customer?: userUpdateOneRequiredWithoutPreorderNestedInput
  }

  export type preorderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_option_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type preorderCreateManyInput = {
    id?: number
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    product_option_id: number
    customer_id: string
  }

  export type preorderUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type preorderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_option_id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type productCreateInput = {
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: categoryCreateNestedOneWithoutProductInput
    inventory?: inventoryCreateNestedOneWithoutProductInput
    variants?: product_variantCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    name: string
    image?: string | null
    category_id?: number | null
    inventoryId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    variants?: product_variantUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneWithoutProductNestedInput
    inventory?: inventoryUpdateOneWithoutProductNestedInput
    variants?: product_variantUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventoryId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: product_variantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    name: string
    image?: string | null
    category_id?: number | null
    inventoryId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventoryId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_variantCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    product: productCreateNestedOneWithoutVariantsInput
    options?: product_optionCreateNestedManyWithoutVariantInput
  }

  export type product_variantUncheckedCreateInput = {
    id?: number
    product_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    options?: product_optionUncheckedCreateNestedManyWithoutVariantInput
  }

  export type product_variantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutVariantsNestedInput
    options?: product_optionUpdateManyWithoutVariantNestedInput
  }

  export type product_variantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: product_optionUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type product_variantCreateManyInput = {
    id?: number
    product_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type product_variantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_variantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_optionCreateInput = {
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    created_at?: Date | string
    updated_at?: Date | string
    variant: product_variantCreateNestedOneWithoutOptionsInput
    transaction_items?: transaction_itemCreateNestedManyWithoutProduct_optionInput
    product_history?: product_historyCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionUncheckedCreateInput = {
    id?: number
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    variant_id: number
    created_at?: Date | string
    updated_at?: Date | string
    transaction_items?: transaction_itemUncheckedCreateNestedManyWithoutProduct_optionInput
    product_history?: product_historyUncheckedCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderUncheckedCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: product_variantUpdateOneRequiredWithoutOptionsNestedInput
    transaction_items?: transaction_itemUpdateManyWithoutProduct_optionNestedInput
    product_history?: product_historyUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUpdateManyWithoutProduct_optionNestedInput
  }

  export type product_optionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    variant_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_items?: transaction_itemUncheckedUpdateManyWithoutProduct_optionNestedInput
    product_history?: product_historyUncheckedUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUncheckedUpdateManyWithoutProduct_optionNestedInput
  }

  export type product_optionCreateManyInput = {
    id?: number
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    variant_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type product_optionUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_optionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    variant_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_historyCreateInput = {
    change_type?: $Enums.product_history_change_type
    quantity_before: number
    quantity_after: number
    changed_at?: Date | string
    product_option: product_optionCreateNestedOneWithoutProduct_historyInput
  }

  export type product_historyUncheckedCreateInput = {
    id?: number
    product_option_id: number
    change_type?: $Enums.product_history_change_type
    quantity_before: number
    quantity_after: number
    changed_at?: Date | string
  }

  export type product_historyUpdateInput = {
    change_type?: Enumproduct_history_change_typeFieldUpdateOperationsInput | $Enums.product_history_change_type
    quantity_before?: IntFieldUpdateOperationsInput | number
    quantity_after?: IntFieldUpdateOperationsInput | number
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_option?: product_optionUpdateOneRequiredWithoutProduct_historyNestedInput
  }

  export type product_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_option_id?: IntFieldUpdateOperationsInput | number
    change_type?: Enumproduct_history_change_typeFieldUpdateOperationsInput | $Enums.product_history_change_type
    quantity_before?: IntFieldUpdateOperationsInput | number
    quantity_after?: IntFieldUpdateOperationsInput | number
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_historyCreateManyInput = {
    id?: number
    product_option_id: number
    change_type?: $Enums.product_history_change_type
    quantity_before: number
    quantity_after: number
    changed_at?: Date | string
  }

  export type product_historyUpdateManyMutationInput = {
    change_type?: Enumproduct_history_change_typeFieldUpdateOperationsInput | $Enums.product_history_change_type
    quantity_before?: IntFieldUpdateOperationsInput | number
    quantity_after?: IntFieldUpdateOperationsInput | number
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_option_id?: IntFieldUpdateOperationsInput | number
    change_type?: Enumproduct_history_change_typeFieldUpdateOperationsInput | $Enums.product_history_change_type
    quantity_before?: IntFieldUpdateOperationsInput | number
    quantity_after?: IntFieldUpdateOperationsInput | number
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingCreateInput = {
    key: string
    value: string
  }

  export type settingUncheckedCreateInput = {
    id?: number
    key: string
    value: string
  }

  export type settingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type settingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type settingCreateManyInput = {
    id?: number
    key: string
    value: string
  }

  export type settingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type settingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type transactionCreateInput = {
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
    customer?: userCreateNestedOneWithoutTransactionInput
    transaction_item?: transaction_itemCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: number
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
    customer_id?: string | null
    transaction_item?: transaction_itemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionUpdateInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: userUpdateOneWithoutTransactionNestedInput
    transaction_item?: transaction_itemUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_item?: transaction_itemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type transactionCreateManyInput = {
    id?: number
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
    customer_id?: string | null
  }

  export type transactionUpdateManyMutationInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaction_itemCreateInput = {
    quantity: number
    price: number
    product_option: product_optionCreateNestedOneWithoutTransaction_itemsInput
    transaction: transactionCreateNestedOneWithoutTransaction_itemInput
  }

  export type transaction_itemUncheckedCreateInput = {
    id?: number
    quantity: number
    price: number
    product_option_id: number
    transaction_id: number
  }

  export type transaction_itemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product_option?: product_optionUpdateOneRequiredWithoutTransaction_itemsNestedInput
    transaction?: transactionUpdateOneRequiredWithoutTransaction_itemNestedInput
  }

  export type transaction_itemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product_option_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_itemCreateManyInput = {
    id?: number
    quantity: number
    price: number
    product_option_id: number
    transaction_id: number
  }

  export type transaction_itemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_itemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product_option_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuditListRelationFilter = {
    every?: auditWhereInput
    some?: auditWhereInput
    none?: auditWhereInput
  }

  export type PreorderListRelationFilter = {
    every?: preorderWhereInput
    some?: preorderWhereInput
    none?: preorderWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type auditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type preorderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
    last_login?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
    last_login?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avatar?: SortOrder
    last_login?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type auditOrderByRelevanceInput = {
    fields: auditOrderByRelevanceFieldEnum | auditOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type auditCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    action_url?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type auditAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auditMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    action_url?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type auditMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    action_url?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type auditSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryOrderByRelevanceInput = {
    fields: categoryOrderByRelevanceFieldEnum | categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type inventoryOrderByRelevanceInput = {
    fields: inventoryOrderByRelevanceFieldEnum | inventoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumpreorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.preorder_status | Enumpreorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.preorder_status[]
    notIn?: $Enums.preorder_status[]
    not?: NestedEnumpreorder_statusFilter<$PrismaModel> | $Enums.preorder_status
  }

  export type Product_optionScalarRelationFilter = {
    is?: product_optionWhereInput
    isNot?: product_optionWhereInput
  }

  export type preorderOrderByRelevanceInput = {
    fields: preorderOrderByRelevanceFieldEnum | preorderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type preorderCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_option_id?: SortOrder
    customer_id?: SortOrder
  }

  export type preorderAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    product_option_id?: SortOrder
  }

  export type preorderMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_option_id?: SortOrder
    customer_id?: SortOrder
  }

  export type preorderMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_option_id?: SortOrder
    customer_id?: SortOrder
  }

  export type preorderSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    product_option_id?: SortOrder
  }

  export type Enumpreorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.preorder_status | Enumpreorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.preorder_status[]
    notIn?: $Enums.preorder_status[]
    not?: NestedEnumpreorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.preorder_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpreorder_statusFilter<$PrismaModel>
    _max?: NestedEnumpreorder_statusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: inventoryWhereInput | null
    isNot?: inventoryWhereInput | null
  }

  export type Product_variantListRelationFilter = {
    every?: product_variantWhereInput
    some?: product_variantWhereInput
    none?: product_variantWhereInput
  }

  export type product_variantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productOrderByRelevanceInput = {
    fields: productOrderByRelevanceFieldEnum | productOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    inventoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    inventoryId?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    inventoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    category_id?: SortOrder
    inventoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    inventoryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type Product_optionListRelationFilter = {
    every?: product_optionWhereInput
    some?: product_optionWhereInput
    none?: product_optionWhereInput
  }

  export type product_optionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_variantOrderByRelevanceInput = {
    fields: product_variantOrderByRelevanceFieldEnum | product_variantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type product_variantCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type product_variantAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type product_variantMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type product_variantMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type product_variantSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type Product_variantScalarRelationFilter = {
    is?: product_variantWhereInput
    isNot?: product_variantWhereInput
  }

  export type Transaction_itemListRelationFilter = {
    every?: transaction_itemWhereInput
    some?: transaction_itemWhereInput
    none?: transaction_itemWhereInput
  }

  export type Product_historyListRelationFilter = {
    every?: product_historyWhereInput
    some?: product_historyWhereInput
    none?: product_historyWhereInput
  }

  export type transaction_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_optionOrderByRelevanceInput = {
    fields: product_optionOrderByRelevanceFieldEnum | product_optionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type product_optionCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    image?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    stock?: SortOrder
    option_value?: SortOrder
    variant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type product_optionAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    stock?: SortOrder
    variant_id?: SortOrder
  }

  export type product_optionMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    image?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    stock?: SortOrder
    option_value?: SortOrder
    variant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type product_optionMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    image?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    stock?: SortOrder
    option_value?: SortOrder
    variant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type product_optionSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    stock?: SortOrder
    variant_id?: SortOrder
  }

  export type Enumproduct_history_change_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.product_history_change_type | Enumproduct_history_change_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_history_change_type[]
    notIn?: $Enums.product_history_change_type[]
    not?: NestedEnumproduct_history_change_typeFilter<$PrismaModel> | $Enums.product_history_change_type
  }

  export type product_historyCountOrderByAggregateInput = {
    id?: SortOrder
    product_option_id?: SortOrder
    change_type?: SortOrder
    quantity_before?: SortOrder
    quantity_after?: SortOrder
    changed_at?: SortOrder
  }

  export type product_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    product_option_id?: SortOrder
    quantity_before?: SortOrder
    quantity_after?: SortOrder
  }

  export type product_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    product_option_id?: SortOrder
    change_type?: SortOrder
    quantity_before?: SortOrder
    quantity_after?: SortOrder
    changed_at?: SortOrder
  }

  export type product_historyMinOrderByAggregateInput = {
    id?: SortOrder
    product_option_id?: SortOrder
    change_type?: SortOrder
    quantity_before?: SortOrder
    quantity_after?: SortOrder
    changed_at?: SortOrder
  }

  export type product_historySumOrderByAggregateInput = {
    id?: SortOrder
    product_option_id?: SortOrder
    quantity_before?: SortOrder
    quantity_after?: SortOrder
  }

  export type Enumproduct_history_change_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_history_change_type | Enumproduct_history_change_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_history_change_type[]
    notIn?: $Enums.product_history_change_type[]
    not?: NestedEnumproduct_history_change_typeWithAggregatesFilter<$PrismaModel> | $Enums.product_history_change_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_history_change_typeFilter<$PrismaModel>
    _max?: NestedEnumproduct_history_change_typeFilter<$PrismaModel>
  }

  export type settingOrderByRelevanceInput = {
    fields: settingOrderByRelevanceFieldEnum | settingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type settingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type settingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type settingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type settingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type settingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumtransaction_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[]
    notIn?: $Enums.transaction_status[]
    not?: NestedEnumtransaction_statusFilter<$PrismaModel> | $Enums.transaction_status
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type transactionOrderByRelevanceInput = {
    fields: transactionOrderByRelevanceFieldEnum | transactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer_id?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type Enumtransaction_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[]
    notIn?: $Enums.transaction_status[]
    not?: NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel> | $Enums.transaction_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_statusFilter<$PrismaModel>
    _max?: NestedEnumtransaction_statusFilter<$PrismaModel>
  }

  export type TransactionScalarRelationFilter = {
    is?: transactionWhereInput
    isNot?: transactionWhereInput
  }

  export type transaction_itemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    product_option_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type transaction_itemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    product_option_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type transaction_itemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    product_option_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type transaction_itemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    product_option_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type transaction_itemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    product_option_id?: SortOrder
    transaction_id?: SortOrder
  }

  export type auditCreateNestedManyWithoutUserInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
  }

  export type preorderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<preorderCreateWithoutCustomerInput, preorderUncheckedCreateWithoutCustomerInput> | preorderCreateWithoutCustomerInput[] | preorderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutCustomerInput | preorderCreateOrConnectWithoutCustomerInput[]
    createMany?: preorderCreateManyCustomerInputEnvelope
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<transactionCreateWithoutCustomerInput, transactionUncheckedCreateWithoutCustomerInput> | transactionCreateWithoutCustomerInput[] | transactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCustomerInput | transactionCreateOrConnectWithoutCustomerInput[]
    createMany?: transactionCreateManyCustomerInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type auditUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
  }

  export type preorderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<preorderCreateWithoutCustomerInput, preorderUncheckedCreateWithoutCustomerInput> | preorderCreateWithoutCustomerInput[] | preorderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutCustomerInput | preorderCreateOrConnectWithoutCustomerInput[]
    createMany?: preorderCreateManyCustomerInputEnvelope
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<transactionCreateWithoutCustomerInput, transactionUncheckedCreateWithoutCustomerInput> | transactionCreateWithoutCustomerInput[] | transactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCustomerInput | transactionCreateOrConnectWithoutCustomerInput[]
    createMany?: transactionCreateManyCustomerInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type auditUpdateManyWithoutUserNestedInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    upsert?: auditUpsertWithWhereUniqueWithoutUserInput | auditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    set?: auditWhereUniqueInput | auditWhereUniqueInput[]
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[]
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    update?: auditUpdateWithWhereUniqueWithoutUserInput | auditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auditUpdateManyWithWhereWithoutUserInput | auditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[]
  }

  export type preorderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<preorderCreateWithoutCustomerInput, preorderUncheckedCreateWithoutCustomerInput> | preorderCreateWithoutCustomerInput[] | preorderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutCustomerInput | preorderCreateOrConnectWithoutCustomerInput[]
    upsert?: preorderUpsertWithWhereUniqueWithoutCustomerInput | preorderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: preorderCreateManyCustomerInputEnvelope
    set?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    disconnect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    delete?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    update?: preorderUpdateWithWhereUniqueWithoutCustomerInput | preorderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: preorderUpdateManyWithWhereWithoutCustomerInput | preorderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: preorderScalarWhereInput | preorderScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<transactionCreateWithoutCustomerInput, transactionUncheckedCreateWithoutCustomerInput> | transactionCreateWithoutCustomerInput[] | transactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCustomerInput | transactionCreateOrConnectWithoutCustomerInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutCustomerInput | transactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: transactionCreateManyCustomerInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutCustomerInput | transactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutCustomerInput | transactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type auditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput> | auditCreateWithoutUserInput[] | auditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: auditCreateOrConnectWithoutUserInput | auditCreateOrConnectWithoutUserInput[]
    upsert?: auditUpsertWithWhereUniqueWithoutUserInput | auditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: auditCreateManyUserInputEnvelope
    set?: auditWhereUniqueInput | auditWhereUniqueInput[]
    disconnect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    delete?: auditWhereUniqueInput | auditWhereUniqueInput[]
    connect?: auditWhereUniqueInput | auditWhereUniqueInput[]
    update?: auditUpdateWithWhereUniqueWithoutUserInput | auditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: auditUpdateManyWithWhereWithoutUserInput | auditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: auditScalarWhereInput | auditScalarWhereInput[]
  }

  export type preorderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<preorderCreateWithoutCustomerInput, preorderUncheckedCreateWithoutCustomerInput> | preorderCreateWithoutCustomerInput[] | preorderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutCustomerInput | preorderCreateOrConnectWithoutCustomerInput[]
    upsert?: preorderUpsertWithWhereUniqueWithoutCustomerInput | preorderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: preorderCreateManyCustomerInputEnvelope
    set?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    disconnect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    delete?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    update?: preorderUpdateWithWhereUniqueWithoutCustomerInput | preorderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: preorderUpdateManyWithWhereWithoutCustomerInput | preorderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: preorderScalarWhereInput | preorderScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<transactionCreateWithoutCustomerInput, transactionUncheckedCreateWithoutCustomerInput> | transactionCreateWithoutCustomerInput[] | transactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutCustomerInput | transactionCreateOrConnectWithoutCustomerInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutCustomerInput | transactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: transactionCreateManyCustomerInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutCustomerInput | transactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutCustomerInput | transactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutAuditInput = {
    create?: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
    connectOrCreate?: userCreateOrConnectWithoutAuditInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutAuditNestedInput = {
    create?: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
    connectOrCreate?: userCreateOrConnectWithoutAuditInput
    upsert?: userUpsertWithoutAuditInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAuditInput, userUpdateWithoutAuditInput>, userUncheckedUpdateWithoutAuditInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type productCreateNestedManyWithoutInventoryInput = {
    create?: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput> | productCreateWithoutInventoryInput[] | productUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutInventoryInput | productCreateOrConnectWithoutInventoryInput[]
    createMany?: productCreateManyInventoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput> | productCreateWithoutInventoryInput[] | productUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutInventoryInput | productCreateOrConnectWithoutInventoryInput[]
    createMany?: productCreateManyInventoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput> | productCreateWithoutInventoryInput[] | productUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutInventoryInput | productCreateOrConnectWithoutInventoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutInventoryInput | productUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: productCreateManyInventoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutInventoryInput | productUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutInventoryInput | productUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput> | productCreateWithoutInventoryInput[] | productUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutInventoryInput | productCreateOrConnectWithoutInventoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutInventoryInput | productUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: productCreateManyInventoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutInventoryInput | productUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutInventoryInput | productUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type product_optionCreateNestedOneWithoutPreorderInput = {
    create?: XOR<product_optionCreateWithoutPreorderInput, product_optionUncheckedCreateWithoutPreorderInput>
    connectOrCreate?: product_optionCreateOrConnectWithoutPreorderInput
    connect?: product_optionWhereUniqueInput
  }

  export type userCreateNestedOneWithoutPreorderInput = {
    create?: XOR<userCreateWithoutPreorderInput, userUncheckedCreateWithoutPreorderInput>
    connectOrCreate?: userCreateOrConnectWithoutPreorderInput
    connect?: userWhereUniqueInput
  }

  export type Enumpreorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.preorder_status
  }

  export type product_optionUpdateOneRequiredWithoutPreorderNestedInput = {
    create?: XOR<product_optionCreateWithoutPreorderInput, product_optionUncheckedCreateWithoutPreorderInput>
    connectOrCreate?: product_optionCreateOrConnectWithoutPreorderInput
    upsert?: product_optionUpsertWithoutPreorderInput
    connect?: product_optionWhereUniqueInput
    update?: XOR<XOR<product_optionUpdateToOneWithWhereWithoutPreorderInput, product_optionUpdateWithoutPreorderInput>, product_optionUncheckedUpdateWithoutPreorderInput>
  }

  export type userUpdateOneRequiredWithoutPreorderNestedInput = {
    create?: XOR<userCreateWithoutPreorderInput, userUncheckedCreateWithoutPreorderInput>
    connectOrCreate?: userCreateOrConnectWithoutPreorderInput
    upsert?: userUpsertWithoutPreorderInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPreorderInput, userUpdateWithoutPreorderInput>, userUncheckedUpdateWithoutPreorderInput>
  }

  export type categoryCreateNestedOneWithoutProductInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    connect?: categoryWhereUniqueInput
  }

  export type inventoryCreateNestedOneWithoutProductInput = {
    create?: XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutProductInput
    connect?: inventoryWhereUniqueInput
  }

  export type product_variantCreateNestedManyWithoutProductInput = {
    create?: XOR<product_variantCreateWithoutProductInput, product_variantUncheckedCreateWithoutProductInput> | product_variantCreateWithoutProductInput[] | product_variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variantCreateOrConnectWithoutProductInput | product_variantCreateOrConnectWithoutProductInput[]
    createMany?: product_variantCreateManyProductInputEnvelope
    connect?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
  }

  export type product_variantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<product_variantCreateWithoutProductInput, product_variantUncheckedCreateWithoutProductInput> | product_variantCreateWithoutProductInput[] | product_variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variantCreateOrConnectWithoutProductInput | product_variantCreateOrConnectWithoutProductInput[]
    createMany?: product_variantCreateManyProductInputEnvelope
    connect?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
  }

  export type categoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    upsert?: categoryUpsertWithoutProductInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProductInput, categoryUpdateWithoutProductInput>, categoryUncheckedUpdateWithoutProductInput>
  }

  export type inventoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutProductInput
    upsert?: inventoryUpsertWithoutProductInput
    disconnect?: inventoryWhereInput | boolean
    delete?: inventoryWhereInput | boolean
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutProductInput, inventoryUpdateWithoutProductInput>, inventoryUncheckedUpdateWithoutProductInput>
  }

  export type product_variantUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_variantCreateWithoutProductInput, product_variantUncheckedCreateWithoutProductInput> | product_variantCreateWithoutProductInput[] | product_variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variantCreateOrConnectWithoutProductInput | product_variantCreateOrConnectWithoutProductInput[]
    upsert?: product_variantUpsertWithWhereUniqueWithoutProductInput | product_variantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_variantCreateManyProductInputEnvelope
    set?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    disconnect?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    delete?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    connect?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    update?: product_variantUpdateWithWhereUniqueWithoutProductInput | product_variantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_variantUpdateManyWithWhereWithoutProductInput | product_variantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_variantScalarWhereInput | product_variantScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type product_variantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_variantCreateWithoutProductInput, product_variantUncheckedCreateWithoutProductInput> | product_variantCreateWithoutProductInput[] | product_variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_variantCreateOrConnectWithoutProductInput | product_variantCreateOrConnectWithoutProductInput[]
    upsert?: product_variantUpsertWithWhereUniqueWithoutProductInput | product_variantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_variantCreateManyProductInputEnvelope
    set?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    disconnect?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    delete?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    connect?: product_variantWhereUniqueInput | product_variantWhereUniqueInput[]
    update?: product_variantUpdateWithWhereUniqueWithoutProductInput | product_variantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_variantUpdateManyWithWhereWithoutProductInput | product_variantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_variantScalarWhereInput | product_variantScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutVariantsInput = {
    create?: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: productCreateOrConnectWithoutVariantsInput
    connect?: productWhereUniqueInput
  }

  export type product_optionCreateNestedManyWithoutVariantInput = {
    create?: XOR<product_optionCreateWithoutVariantInput, product_optionUncheckedCreateWithoutVariantInput> | product_optionCreateWithoutVariantInput[] | product_optionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: product_optionCreateOrConnectWithoutVariantInput | product_optionCreateOrConnectWithoutVariantInput[]
    createMany?: product_optionCreateManyVariantInputEnvelope
    connect?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
  }

  export type product_optionUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<product_optionCreateWithoutVariantInput, product_optionUncheckedCreateWithoutVariantInput> | product_optionCreateWithoutVariantInput[] | product_optionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: product_optionCreateOrConnectWithoutVariantInput | product_optionCreateOrConnectWithoutVariantInput[]
    createMany?: product_optionCreateManyVariantInputEnvelope
    connect?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
  }

  export type productUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: productCreateOrConnectWithoutVariantsInput
    upsert?: productUpsertWithoutVariantsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutVariantsInput, productUpdateWithoutVariantsInput>, productUncheckedUpdateWithoutVariantsInput>
  }

  export type product_optionUpdateManyWithoutVariantNestedInput = {
    create?: XOR<product_optionCreateWithoutVariantInput, product_optionUncheckedCreateWithoutVariantInput> | product_optionCreateWithoutVariantInput[] | product_optionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: product_optionCreateOrConnectWithoutVariantInput | product_optionCreateOrConnectWithoutVariantInput[]
    upsert?: product_optionUpsertWithWhereUniqueWithoutVariantInput | product_optionUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: product_optionCreateManyVariantInputEnvelope
    set?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    disconnect?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    delete?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    connect?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    update?: product_optionUpdateWithWhereUniqueWithoutVariantInput | product_optionUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: product_optionUpdateManyWithWhereWithoutVariantInput | product_optionUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: product_optionScalarWhereInput | product_optionScalarWhereInput[]
  }

  export type product_optionUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<product_optionCreateWithoutVariantInput, product_optionUncheckedCreateWithoutVariantInput> | product_optionCreateWithoutVariantInput[] | product_optionUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: product_optionCreateOrConnectWithoutVariantInput | product_optionCreateOrConnectWithoutVariantInput[]
    upsert?: product_optionUpsertWithWhereUniqueWithoutVariantInput | product_optionUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: product_optionCreateManyVariantInputEnvelope
    set?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    disconnect?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    delete?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    connect?: product_optionWhereUniqueInput | product_optionWhereUniqueInput[]
    update?: product_optionUpdateWithWhereUniqueWithoutVariantInput | product_optionUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: product_optionUpdateManyWithWhereWithoutVariantInput | product_optionUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: product_optionScalarWhereInput | product_optionScalarWhereInput[]
  }

  export type product_variantCreateNestedOneWithoutOptionsInput = {
    create?: XOR<product_variantCreateWithoutOptionsInput, product_variantUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: product_variantCreateOrConnectWithoutOptionsInput
    connect?: product_variantWhereUniqueInput
  }

  export type transaction_itemCreateNestedManyWithoutProduct_optionInput = {
    create?: XOR<transaction_itemCreateWithoutProduct_optionInput, transaction_itemUncheckedCreateWithoutProduct_optionInput> | transaction_itemCreateWithoutProduct_optionInput[] | transaction_itemUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutProduct_optionInput | transaction_itemCreateOrConnectWithoutProduct_optionInput[]
    createMany?: transaction_itemCreateManyProduct_optionInputEnvelope
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
  }

  export type product_historyCreateNestedManyWithoutProduct_optionInput = {
    create?: XOR<product_historyCreateWithoutProduct_optionInput, product_historyUncheckedCreateWithoutProduct_optionInput> | product_historyCreateWithoutProduct_optionInput[] | product_historyUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: product_historyCreateOrConnectWithoutProduct_optionInput | product_historyCreateOrConnectWithoutProduct_optionInput[]
    createMany?: product_historyCreateManyProduct_optionInputEnvelope
    connect?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
  }

  export type preorderCreateNestedManyWithoutProduct_optionInput = {
    create?: XOR<preorderCreateWithoutProduct_optionInput, preorderUncheckedCreateWithoutProduct_optionInput> | preorderCreateWithoutProduct_optionInput[] | preorderUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutProduct_optionInput | preorderCreateOrConnectWithoutProduct_optionInput[]
    createMany?: preorderCreateManyProduct_optionInputEnvelope
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
  }

  export type transaction_itemUncheckedCreateNestedManyWithoutProduct_optionInput = {
    create?: XOR<transaction_itemCreateWithoutProduct_optionInput, transaction_itemUncheckedCreateWithoutProduct_optionInput> | transaction_itemCreateWithoutProduct_optionInput[] | transaction_itemUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutProduct_optionInput | transaction_itemCreateOrConnectWithoutProduct_optionInput[]
    createMany?: transaction_itemCreateManyProduct_optionInputEnvelope
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
  }

  export type product_historyUncheckedCreateNestedManyWithoutProduct_optionInput = {
    create?: XOR<product_historyCreateWithoutProduct_optionInput, product_historyUncheckedCreateWithoutProduct_optionInput> | product_historyCreateWithoutProduct_optionInput[] | product_historyUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: product_historyCreateOrConnectWithoutProduct_optionInput | product_historyCreateOrConnectWithoutProduct_optionInput[]
    createMany?: product_historyCreateManyProduct_optionInputEnvelope
    connect?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
  }

  export type preorderUncheckedCreateNestedManyWithoutProduct_optionInput = {
    create?: XOR<preorderCreateWithoutProduct_optionInput, preorderUncheckedCreateWithoutProduct_optionInput> | preorderCreateWithoutProduct_optionInput[] | preorderUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutProduct_optionInput | preorderCreateOrConnectWithoutProduct_optionInput[]
    createMany?: preorderCreateManyProduct_optionInputEnvelope
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
  }

  export type product_variantUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<product_variantCreateWithoutOptionsInput, product_variantUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: product_variantCreateOrConnectWithoutOptionsInput
    upsert?: product_variantUpsertWithoutOptionsInput
    connect?: product_variantWhereUniqueInput
    update?: XOR<XOR<product_variantUpdateToOneWithWhereWithoutOptionsInput, product_variantUpdateWithoutOptionsInput>, product_variantUncheckedUpdateWithoutOptionsInput>
  }

  export type transaction_itemUpdateManyWithoutProduct_optionNestedInput = {
    create?: XOR<transaction_itemCreateWithoutProduct_optionInput, transaction_itemUncheckedCreateWithoutProduct_optionInput> | transaction_itemCreateWithoutProduct_optionInput[] | transaction_itemUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutProduct_optionInput | transaction_itemCreateOrConnectWithoutProduct_optionInput[]
    upsert?: transaction_itemUpsertWithWhereUniqueWithoutProduct_optionInput | transaction_itemUpsertWithWhereUniqueWithoutProduct_optionInput[]
    createMany?: transaction_itemCreateManyProduct_optionInputEnvelope
    set?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    disconnect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    delete?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    update?: transaction_itemUpdateWithWhereUniqueWithoutProduct_optionInput | transaction_itemUpdateWithWhereUniqueWithoutProduct_optionInput[]
    updateMany?: transaction_itemUpdateManyWithWhereWithoutProduct_optionInput | transaction_itemUpdateManyWithWhereWithoutProduct_optionInput[]
    deleteMany?: transaction_itemScalarWhereInput | transaction_itemScalarWhereInput[]
  }

  export type product_historyUpdateManyWithoutProduct_optionNestedInput = {
    create?: XOR<product_historyCreateWithoutProduct_optionInput, product_historyUncheckedCreateWithoutProduct_optionInput> | product_historyCreateWithoutProduct_optionInput[] | product_historyUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: product_historyCreateOrConnectWithoutProduct_optionInput | product_historyCreateOrConnectWithoutProduct_optionInput[]
    upsert?: product_historyUpsertWithWhereUniqueWithoutProduct_optionInput | product_historyUpsertWithWhereUniqueWithoutProduct_optionInput[]
    createMany?: product_historyCreateManyProduct_optionInputEnvelope
    set?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    disconnect?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    delete?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    connect?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    update?: product_historyUpdateWithWhereUniqueWithoutProduct_optionInput | product_historyUpdateWithWhereUniqueWithoutProduct_optionInput[]
    updateMany?: product_historyUpdateManyWithWhereWithoutProduct_optionInput | product_historyUpdateManyWithWhereWithoutProduct_optionInput[]
    deleteMany?: product_historyScalarWhereInput | product_historyScalarWhereInput[]
  }

  export type preorderUpdateManyWithoutProduct_optionNestedInput = {
    create?: XOR<preorderCreateWithoutProduct_optionInput, preorderUncheckedCreateWithoutProduct_optionInput> | preorderCreateWithoutProduct_optionInput[] | preorderUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutProduct_optionInput | preorderCreateOrConnectWithoutProduct_optionInput[]
    upsert?: preorderUpsertWithWhereUniqueWithoutProduct_optionInput | preorderUpsertWithWhereUniqueWithoutProduct_optionInput[]
    createMany?: preorderCreateManyProduct_optionInputEnvelope
    set?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    disconnect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    delete?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    update?: preorderUpdateWithWhereUniqueWithoutProduct_optionInput | preorderUpdateWithWhereUniqueWithoutProduct_optionInput[]
    updateMany?: preorderUpdateManyWithWhereWithoutProduct_optionInput | preorderUpdateManyWithWhereWithoutProduct_optionInput[]
    deleteMany?: preorderScalarWhereInput | preorderScalarWhereInput[]
  }

  export type transaction_itemUncheckedUpdateManyWithoutProduct_optionNestedInput = {
    create?: XOR<transaction_itemCreateWithoutProduct_optionInput, transaction_itemUncheckedCreateWithoutProduct_optionInput> | transaction_itemCreateWithoutProduct_optionInput[] | transaction_itemUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutProduct_optionInput | transaction_itemCreateOrConnectWithoutProduct_optionInput[]
    upsert?: transaction_itemUpsertWithWhereUniqueWithoutProduct_optionInput | transaction_itemUpsertWithWhereUniqueWithoutProduct_optionInput[]
    createMany?: transaction_itemCreateManyProduct_optionInputEnvelope
    set?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    disconnect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    delete?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    update?: transaction_itemUpdateWithWhereUniqueWithoutProduct_optionInput | transaction_itemUpdateWithWhereUniqueWithoutProduct_optionInput[]
    updateMany?: transaction_itemUpdateManyWithWhereWithoutProduct_optionInput | transaction_itemUpdateManyWithWhereWithoutProduct_optionInput[]
    deleteMany?: transaction_itemScalarWhereInput | transaction_itemScalarWhereInput[]
  }

  export type product_historyUncheckedUpdateManyWithoutProduct_optionNestedInput = {
    create?: XOR<product_historyCreateWithoutProduct_optionInput, product_historyUncheckedCreateWithoutProduct_optionInput> | product_historyCreateWithoutProduct_optionInput[] | product_historyUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: product_historyCreateOrConnectWithoutProduct_optionInput | product_historyCreateOrConnectWithoutProduct_optionInput[]
    upsert?: product_historyUpsertWithWhereUniqueWithoutProduct_optionInput | product_historyUpsertWithWhereUniqueWithoutProduct_optionInput[]
    createMany?: product_historyCreateManyProduct_optionInputEnvelope
    set?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    disconnect?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    delete?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    connect?: product_historyWhereUniqueInput | product_historyWhereUniqueInput[]
    update?: product_historyUpdateWithWhereUniqueWithoutProduct_optionInput | product_historyUpdateWithWhereUniqueWithoutProduct_optionInput[]
    updateMany?: product_historyUpdateManyWithWhereWithoutProduct_optionInput | product_historyUpdateManyWithWhereWithoutProduct_optionInput[]
    deleteMany?: product_historyScalarWhereInput | product_historyScalarWhereInput[]
  }

  export type preorderUncheckedUpdateManyWithoutProduct_optionNestedInput = {
    create?: XOR<preorderCreateWithoutProduct_optionInput, preorderUncheckedCreateWithoutProduct_optionInput> | preorderCreateWithoutProduct_optionInput[] | preorderUncheckedCreateWithoutProduct_optionInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutProduct_optionInput | preorderCreateOrConnectWithoutProduct_optionInput[]
    upsert?: preorderUpsertWithWhereUniqueWithoutProduct_optionInput | preorderUpsertWithWhereUniqueWithoutProduct_optionInput[]
    createMany?: preorderCreateManyProduct_optionInputEnvelope
    set?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    disconnect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    delete?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    update?: preorderUpdateWithWhereUniqueWithoutProduct_optionInput | preorderUpdateWithWhereUniqueWithoutProduct_optionInput[]
    updateMany?: preorderUpdateManyWithWhereWithoutProduct_optionInput | preorderUpdateManyWithWhereWithoutProduct_optionInput[]
    deleteMany?: preorderScalarWhereInput | preorderScalarWhereInput[]
  }

  export type product_optionCreateNestedOneWithoutProduct_historyInput = {
    create?: XOR<product_optionCreateWithoutProduct_historyInput, product_optionUncheckedCreateWithoutProduct_historyInput>
    connectOrCreate?: product_optionCreateOrConnectWithoutProduct_historyInput
    connect?: product_optionWhereUniqueInput
  }

  export type Enumproduct_history_change_typeFieldUpdateOperationsInput = {
    set?: $Enums.product_history_change_type
  }

  export type product_optionUpdateOneRequiredWithoutProduct_historyNestedInput = {
    create?: XOR<product_optionCreateWithoutProduct_historyInput, product_optionUncheckedCreateWithoutProduct_historyInput>
    connectOrCreate?: product_optionCreateOrConnectWithoutProduct_historyInput
    upsert?: product_optionUpsertWithoutProduct_historyInput
    connect?: product_optionWhereUniqueInput
    update?: XOR<XOR<product_optionUpdateToOneWithWhereWithoutProduct_historyInput, product_optionUpdateWithoutProduct_historyInput>, product_optionUncheckedUpdateWithoutProduct_historyInput>
  }

  export type userCreateNestedOneWithoutTransactionInput = {
    create?: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: userCreateOrConnectWithoutTransactionInput
    connect?: userWhereUniqueInput
  }

  export type transaction_itemCreateNestedManyWithoutTransactionInput = {
    create?: XOR<transaction_itemCreateWithoutTransactionInput, transaction_itemUncheckedCreateWithoutTransactionInput> | transaction_itemCreateWithoutTransactionInput[] | transaction_itemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutTransactionInput | transaction_itemCreateOrConnectWithoutTransactionInput[]
    createMany?: transaction_itemCreateManyTransactionInputEnvelope
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
  }

  export type transaction_itemUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<transaction_itemCreateWithoutTransactionInput, transaction_itemUncheckedCreateWithoutTransactionInput> | transaction_itemCreateWithoutTransactionInput[] | transaction_itemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutTransactionInput | transaction_itemCreateOrConnectWithoutTransactionInput[]
    createMany?: transaction_itemCreateManyTransactionInputEnvelope
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
  }

  export type Enumtransaction_statusFieldUpdateOperationsInput = {
    set?: $Enums.transaction_status
  }

  export type userUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: userCreateOrConnectWithoutTransactionInput
    upsert?: userUpsertWithoutTransactionInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTransactionInput, userUpdateWithoutTransactionInput>, userUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_itemUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<transaction_itemCreateWithoutTransactionInput, transaction_itemUncheckedCreateWithoutTransactionInput> | transaction_itemCreateWithoutTransactionInput[] | transaction_itemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutTransactionInput | transaction_itemCreateOrConnectWithoutTransactionInput[]
    upsert?: transaction_itemUpsertWithWhereUniqueWithoutTransactionInput | transaction_itemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: transaction_itemCreateManyTransactionInputEnvelope
    set?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    disconnect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    delete?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    update?: transaction_itemUpdateWithWhereUniqueWithoutTransactionInput | transaction_itemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: transaction_itemUpdateManyWithWhereWithoutTransactionInput | transaction_itemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: transaction_itemScalarWhereInput | transaction_itemScalarWhereInput[]
  }

  export type transaction_itemUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<transaction_itemCreateWithoutTransactionInput, transaction_itemUncheckedCreateWithoutTransactionInput> | transaction_itemCreateWithoutTransactionInput[] | transaction_itemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_itemCreateOrConnectWithoutTransactionInput | transaction_itemCreateOrConnectWithoutTransactionInput[]
    upsert?: transaction_itemUpsertWithWhereUniqueWithoutTransactionInput | transaction_itemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: transaction_itemCreateManyTransactionInputEnvelope
    set?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    disconnect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    delete?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    connect?: transaction_itemWhereUniqueInput | transaction_itemWhereUniqueInput[]
    update?: transaction_itemUpdateWithWhereUniqueWithoutTransactionInput | transaction_itemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: transaction_itemUpdateManyWithWhereWithoutTransactionInput | transaction_itemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: transaction_itemScalarWhereInput | transaction_itemScalarWhereInput[]
  }

  export type product_optionCreateNestedOneWithoutTransaction_itemsInput = {
    create?: XOR<product_optionCreateWithoutTransaction_itemsInput, product_optionUncheckedCreateWithoutTransaction_itemsInput>
    connectOrCreate?: product_optionCreateOrConnectWithoutTransaction_itemsInput
    connect?: product_optionWhereUniqueInput
  }

  export type transactionCreateNestedOneWithoutTransaction_itemInput = {
    create?: XOR<transactionCreateWithoutTransaction_itemInput, transactionUncheckedCreateWithoutTransaction_itemInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_itemInput
    connect?: transactionWhereUniqueInput
  }

  export type product_optionUpdateOneRequiredWithoutTransaction_itemsNestedInput = {
    create?: XOR<product_optionCreateWithoutTransaction_itemsInput, product_optionUncheckedCreateWithoutTransaction_itemsInput>
    connectOrCreate?: product_optionCreateOrConnectWithoutTransaction_itemsInput
    upsert?: product_optionUpsertWithoutTransaction_itemsInput
    connect?: product_optionWhereUniqueInput
    update?: XOR<XOR<product_optionUpdateToOneWithWhereWithoutTransaction_itemsInput, product_optionUpdateWithoutTransaction_itemsInput>, product_optionUncheckedUpdateWithoutTransaction_itemsInput>
  }

  export type transactionUpdateOneRequiredWithoutTransaction_itemNestedInput = {
    create?: XOR<transactionCreateWithoutTransaction_itemInput, transactionUncheckedCreateWithoutTransaction_itemInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_itemInput
    upsert?: transactionUpsertWithoutTransaction_itemInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutTransaction_itemInput, transactionUpdateWithoutTransaction_itemInput>, transactionUncheckedUpdateWithoutTransaction_itemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumpreorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.preorder_status | Enumpreorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.preorder_status[]
    notIn?: $Enums.preorder_status[]
    not?: NestedEnumpreorder_statusFilter<$PrismaModel> | $Enums.preorder_status
  }

  export type NestedEnumpreorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.preorder_status | Enumpreorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.preorder_status[]
    notIn?: $Enums.preorder_status[]
    not?: NestedEnumpreorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.preorder_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpreorder_statusFilter<$PrismaModel>
    _max?: NestedEnumpreorder_statusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumproduct_history_change_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.product_history_change_type | Enumproduct_history_change_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_history_change_type[]
    notIn?: $Enums.product_history_change_type[]
    not?: NestedEnumproduct_history_change_typeFilter<$PrismaModel> | $Enums.product_history_change_type
  }

  export type NestedEnumproduct_history_change_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_history_change_type | Enumproduct_history_change_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_history_change_type[]
    notIn?: $Enums.product_history_change_type[]
    not?: NestedEnumproduct_history_change_typeWithAggregatesFilter<$PrismaModel> | $Enums.product_history_change_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_history_change_typeFilter<$PrismaModel>
    _max?: NestedEnumproduct_history_change_typeFilter<$PrismaModel>
  }

  export type NestedEnumtransaction_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[]
    notIn?: $Enums.transaction_status[]
    not?: NestedEnumtransaction_statusFilter<$PrismaModel> | $Enums.transaction_status
  }

  export type NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[]
    notIn?: $Enums.transaction_status[]
    not?: NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel> | $Enums.transaction_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_statusFilter<$PrismaModel>
    _max?: NestedEnumtransaction_statusFilter<$PrismaModel>
  }

  export type auditCreateWithoutUserInput = {
    action: string
    action_url?: string | null
    ip_address?: string | null
    created_at?: Date | string
  }

  export type auditUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    action_url?: string | null
    ip_address?: string | null
    created_at?: Date | string
  }

  export type auditCreateOrConnectWithoutUserInput = {
    where: auditWhereUniqueInput
    create: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
  }

  export type auditCreateManyUserInputEnvelope = {
    data: auditCreateManyUserInput | auditCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type preorderCreateWithoutCustomerInput = {
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    product_option: product_optionCreateNestedOneWithoutPreorderInput
  }

  export type preorderUncheckedCreateWithoutCustomerInput = {
    id?: number
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    product_option_id: number
  }

  export type preorderCreateOrConnectWithoutCustomerInput = {
    where: preorderWhereUniqueInput
    create: XOR<preorderCreateWithoutCustomerInput, preorderUncheckedCreateWithoutCustomerInput>
  }

  export type preorderCreateManyCustomerInputEnvelope = {
    data: preorderCreateManyCustomerInput | preorderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutCustomerInput = {
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
    transaction_item?: transaction_itemCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutCustomerInput = {
    id?: number
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
    transaction_item?: transaction_itemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutCustomerInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutCustomerInput, transactionUncheckedCreateWithoutCustomerInput>
  }

  export type transactionCreateManyCustomerInputEnvelope = {
    data: transactionCreateManyCustomerInput | transactionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type auditUpsertWithWhereUniqueWithoutUserInput = {
    where: auditWhereUniqueInput
    update: XOR<auditUpdateWithoutUserInput, auditUncheckedUpdateWithoutUserInput>
    create: XOR<auditCreateWithoutUserInput, auditUncheckedCreateWithoutUserInput>
  }

  export type auditUpdateWithWhereUniqueWithoutUserInput = {
    where: auditWhereUniqueInput
    data: XOR<auditUpdateWithoutUserInput, auditUncheckedUpdateWithoutUserInput>
  }

  export type auditUpdateManyWithWhereWithoutUserInput = {
    where: auditScalarWhereInput
    data: XOR<auditUpdateManyMutationInput, auditUncheckedUpdateManyWithoutUserInput>
  }

  export type auditScalarWhereInput = {
    AND?: auditScalarWhereInput | auditScalarWhereInput[]
    OR?: auditScalarWhereInput[]
    NOT?: auditScalarWhereInput | auditScalarWhereInput[]
    id?: IntFilter<"audit"> | number
    action?: StringFilter<"audit"> | string
    action_url?: StringNullableFilter<"audit"> | string | null
    ip_address?: StringNullableFilter<"audit"> | string | null
    created_at?: DateTimeFilter<"audit"> | Date | string
    user_id?: StringFilter<"audit"> | string
  }

  export type preorderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: preorderWhereUniqueInput
    update: XOR<preorderUpdateWithoutCustomerInput, preorderUncheckedUpdateWithoutCustomerInput>
    create: XOR<preorderCreateWithoutCustomerInput, preorderUncheckedCreateWithoutCustomerInput>
  }

  export type preorderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: preorderWhereUniqueInput
    data: XOR<preorderUpdateWithoutCustomerInput, preorderUncheckedUpdateWithoutCustomerInput>
  }

  export type preorderUpdateManyWithWhereWithoutCustomerInput = {
    where: preorderScalarWhereInput
    data: XOR<preorderUpdateManyMutationInput, preorderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type preorderScalarWhereInput = {
    AND?: preorderScalarWhereInput | preorderScalarWhereInput[]
    OR?: preorderScalarWhereInput[]
    NOT?: preorderScalarWhereInput | preorderScalarWhereInput[]
    id?: IntFilter<"preorder"> | number
    quantity?: IntFilter<"preorder"> | number
    status?: Enumpreorder_statusFilter<"preorder"> | $Enums.preorder_status
    created_at?: DateTimeFilter<"preorder"> | Date | string
    updated_at?: DateTimeFilter<"preorder"> | Date | string
    product_option_id?: IntFilter<"preorder"> | number
    customer_id?: StringFilter<"preorder"> | string
  }

  export type transactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutCustomerInput, transactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<transactionCreateWithoutCustomerInput, transactionUncheckedCreateWithoutCustomerInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutCustomerInput, transactionUncheckedUpdateWithoutCustomerInput>
  }

  export type transactionUpdateManyWithWhereWithoutCustomerInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: IntFilter<"transaction"> | number
    total?: IntFilter<"transaction"> | number
    status?: Enumtransaction_statusFilter<"transaction"> | $Enums.transaction_status
    created_at?: DateTimeFilter<"transaction"> | Date | string
    updated_at?: DateTimeFilter<"transaction"> | Date | string
    customer_id?: StringNullableFilter<"transaction"> | string | null
  }

  export type userCreateWithoutAuditInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    preorder?: preorderCreateNestedManyWithoutCustomerInput
    transaction?: transactionCreateNestedManyWithoutCustomerInput
  }

  export type userUncheckedCreateWithoutAuditInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    preorder?: preorderUncheckedCreateNestedManyWithoutCustomerInput
    transaction?: transactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type userCreateOrConnectWithoutAuditInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
  }

  export type userUpsertWithoutAuditInput = {
    update: XOR<userUpdateWithoutAuditInput, userUncheckedUpdateWithoutAuditInput>
    create: XOR<userCreateWithoutAuditInput, userUncheckedCreateWithoutAuditInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAuditInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAuditInput, userUncheckedUpdateWithoutAuditInput>
  }

  export type userUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preorder?: preorderUpdateManyWithoutCustomerNestedInput
    transaction?: transactionUpdateManyWithoutCustomerNestedInput
  }

  export type userUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preorder?: preorderUncheckedUpdateManyWithoutCustomerNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type productCreateWithoutCategoryInput = {
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    inventory?: inventoryCreateNestedOneWithoutProductInput
    variants?: product_variantCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    image?: string | null
    inventoryId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    variants?: product_variantUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCategoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productCreateManyCategoryInputEnvelope = {
    data: productCreateManyCategoryInput | productCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
  }

  export type productUpdateManyWithWhereWithoutCategoryInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    image?: StringNullableFilter<"product"> | string | null
    category_id?: IntNullableFilter<"product"> | number | null
    inventoryId?: IntNullableFilter<"product"> | number | null
    created_at?: DateTimeFilter<"product"> | Date | string
    updated_at?: DateTimeFilter<"product"> | Date | string
  }

  export type productCreateWithoutInventoryInput = {
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: categoryCreateNestedOneWithoutProductInput
    variants?: product_variantCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutInventoryInput = {
    id?: number
    name: string
    image?: string | null
    category_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    variants?: product_variantUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutInventoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput>
  }

  export type productCreateManyInventoryInputEnvelope = {
    data: productCreateManyInventoryInput | productCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutInventoryInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutInventoryInput, productUncheckedUpdateWithoutInventoryInput>
    create: XOR<productCreateWithoutInventoryInput, productUncheckedCreateWithoutInventoryInput>
  }

  export type productUpdateWithWhereUniqueWithoutInventoryInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutInventoryInput, productUncheckedUpdateWithoutInventoryInput>
  }

  export type productUpdateManyWithWhereWithoutInventoryInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutInventoryInput>
  }

  export type product_optionCreateWithoutPreorderInput = {
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    created_at?: Date | string
    updated_at?: Date | string
    variant: product_variantCreateNestedOneWithoutOptionsInput
    transaction_items?: transaction_itemCreateNestedManyWithoutProduct_optionInput
    product_history?: product_historyCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionUncheckedCreateWithoutPreorderInput = {
    id?: number
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    variant_id: number
    created_at?: Date | string
    updated_at?: Date | string
    transaction_items?: transaction_itemUncheckedCreateNestedManyWithoutProduct_optionInput
    product_history?: product_historyUncheckedCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionCreateOrConnectWithoutPreorderInput = {
    where: product_optionWhereUniqueInput
    create: XOR<product_optionCreateWithoutPreorderInput, product_optionUncheckedCreateWithoutPreorderInput>
  }

  export type userCreateWithoutPreorderInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    audit?: auditCreateNestedManyWithoutUserInput
    transaction?: transactionCreateNestedManyWithoutCustomerInput
  }

  export type userUncheckedCreateWithoutPreorderInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    transaction?: transactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type userCreateOrConnectWithoutPreorderInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPreorderInput, userUncheckedCreateWithoutPreorderInput>
  }

  export type product_optionUpsertWithoutPreorderInput = {
    update: XOR<product_optionUpdateWithoutPreorderInput, product_optionUncheckedUpdateWithoutPreorderInput>
    create: XOR<product_optionCreateWithoutPreorderInput, product_optionUncheckedCreateWithoutPreorderInput>
    where?: product_optionWhereInput
  }

  export type product_optionUpdateToOneWithWhereWithoutPreorderInput = {
    where?: product_optionWhereInput
    data: XOR<product_optionUpdateWithoutPreorderInput, product_optionUncheckedUpdateWithoutPreorderInput>
  }

  export type product_optionUpdateWithoutPreorderInput = {
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: product_variantUpdateOneRequiredWithoutOptionsNestedInput
    transaction_items?: transaction_itemUpdateManyWithoutProduct_optionNestedInput
    product_history?: product_historyUpdateManyWithoutProduct_optionNestedInput
  }

  export type product_optionUncheckedUpdateWithoutPreorderInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    variant_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_items?: transaction_itemUncheckedUpdateManyWithoutProduct_optionNestedInput
    product_history?: product_historyUncheckedUpdateManyWithoutProduct_optionNestedInput
  }

  export type userUpsertWithoutPreorderInput = {
    update: XOR<userUpdateWithoutPreorderInput, userUncheckedUpdateWithoutPreorderInput>
    create: XOR<userCreateWithoutPreorderInput, userUncheckedCreateWithoutPreorderInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPreorderInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPreorderInput, userUncheckedUpdateWithoutPreorderInput>
  }

  export type userUpdateWithoutPreorderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit?: auditUpdateManyWithoutUserNestedInput
    transaction?: transactionUpdateManyWithoutCustomerNestedInput
  }

  export type userUncheckedUpdateWithoutPreorderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type categoryCreateWithoutProductInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type categoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type categoryCreateOrConnectWithoutProductInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
  }

  export type inventoryCreateWithoutProductInput = {
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type inventoryUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type inventoryCreateOrConnectWithoutProductInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
  }

  export type product_variantCreateWithoutProductInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    options?: product_optionCreateNestedManyWithoutVariantInput
  }

  export type product_variantUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    options?: product_optionUncheckedCreateNestedManyWithoutVariantInput
  }

  export type product_variantCreateOrConnectWithoutProductInput = {
    where: product_variantWhereUniqueInput
    create: XOR<product_variantCreateWithoutProductInput, product_variantUncheckedCreateWithoutProductInput>
  }

  export type product_variantCreateManyProductInputEnvelope = {
    data: product_variantCreateManyProductInput | product_variantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutProductInput = {
    update: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProductInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
  }

  export type categoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryUpsertWithoutProductInput = {
    update: XOR<inventoryUpdateWithoutProductInput, inventoryUncheckedUpdateWithoutProductInput>
    create: XOR<inventoryCreateWithoutProductInput, inventoryUncheckedCreateWithoutProductInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutProductInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutProductInput, inventoryUncheckedUpdateWithoutProductInput>
  }

  export type inventoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inventoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_variantUpsertWithWhereUniqueWithoutProductInput = {
    where: product_variantWhereUniqueInput
    update: XOR<product_variantUpdateWithoutProductInput, product_variantUncheckedUpdateWithoutProductInput>
    create: XOR<product_variantCreateWithoutProductInput, product_variantUncheckedCreateWithoutProductInput>
  }

  export type product_variantUpdateWithWhereUniqueWithoutProductInput = {
    where: product_variantWhereUniqueInput
    data: XOR<product_variantUpdateWithoutProductInput, product_variantUncheckedUpdateWithoutProductInput>
  }

  export type product_variantUpdateManyWithWhereWithoutProductInput = {
    where: product_variantScalarWhereInput
    data: XOR<product_variantUpdateManyMutationInput, product_variantUncheckedUpdateManyWithoutProductInput>
  }

  export type product_variantScalarWhereInput = {
    AND?: product_variantScalarWhereInput | product_variantScalarWhereInput[]
    OR?: product_variantScalarWhereInput[]
    NOT?: product_variantScalarWhereInput | product_variantScalarWhereInput[]
    id?: IntFilter<"product_variant"> | number
    product_id?: IntFilter<"product_variant"> | number
    name?: StringFilter<"product_variant"> | string
    created_at?: DateTimeFilter<"product_variant"> | Date | string
    updated_at?: DateTimeFilter<"product_variant"> | Date | string
  }

  export type productCreateWithoutVariantsInput = {
    name: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category?: categoryCreateNestedOneWithoutProductInput
    inventory?: inventoryCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutVariantsInput = {
    id?: number
    name: string
    image?: string | null
    category_id?: number | null
    inventoryId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productCreateOrConnectWithoutVariantsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
  }

  export type product_optionCreateWithoutVariantInput = {
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_items?: transaction_itemCreateNestedManyWithoutProduct_optionInput
    product_history?: product_historyCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionUncheckedCreateWithoutVariantInput = {
    id?: number
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    created_at?: Date | string
    updated_at?: Date | string
    transaction_items?: transaction_itemUncheckedCreateNestedManyWithoutProduct_optionInput
    product_history?: product_historyUncheckedCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderUncheckedCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionCreateOrConnectWithoutVariantInput = {
    where: product_optionWhereUniqueInput
    create: XOR<product_optionCreateWithoutVariantInput, product_optionUncheckedCreateWithoutVariantInput>
  }

  export type product_optionCreateManyVariantInputEnvelope = {
    data: product_optionCreateManyVariantInput | product_optionCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithoutVariantsInput = {
    update: XOR<productUpdateWithoutVariantsInput, productUncheckedUpdateWithoutVariantsInput>
    create: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutVariantsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutVariantsInput, productUncheckedUpdateWithoutVariantsInput>
  }

  export type productUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneWithoutProductNestedInput
    inventory?: inventoryUpdateOneWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventoryId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_optionUpsertWithWhereUniqueWithoutVariantInput = {
    where: product_optionWhereUniqueInput
    update: XOR<product_optionUpdateWithoutVariantInput, product_optionUncheckedUpdateWithoutVariantInput>
    create: XOR<product_optionCreateWithoutVariantInput, product_optionUncheckedCreateWithoutVariantInput>
  }

  export type product_optionUpdateWithWhereUniqueWithoutVariantInput = {
    where: product_optionWhereUniqueInput
    data: XOR<product_optionUpdateWithoutVariantInput, product_optionUncheckedUpdateWithoutVariantInput>
  }

  export type product_optionUpdateManyWithWhereWithoutVariantInput = {
    where: product_optionScalarWhereInput
    data: XOR<product_optionUpdateManyMutationInput, product_optionUncheckedUpdateManyWithoutVariantInput>
  }

  export type product_optionScalarWhereInput = {
    AND?: product_optionScalarWhereInput | product_optionScalarWhereInput[]
    OR?: product_optionScalarWhereInput[]
    NOT?: product_optionScalarWhereInput | product_optionScalarWhereInput[]
    id?: IntFilter<"product_option"> | number
    sku?: StringFilter<"product_option"> | string
    image?: StringNullableFilter<"product_option"> | string | null
    price?: IntFilter<"product_option"> | number
    cost?: IntFilter<"product_option"> | number
    stock?: IntFilter<"product_option"> | number
    option_value?: StringFilter<"product_option"> | string
    variant_id?: IntFilter<"product_option"> | number
    created_at?: DateTimeFilter<"product_option"> | Date | string
    updated_at?: DateTimeFilter<"product_option"> | Date | string
  }

  export type product_variantCreateWithoutOptionsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    product: productCreateNestedOneWithoutVariantsInput
  }

  export type product_variantUncheckedCreateWithoutOptionsInput = {
    id?: number
    product_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type product_variantCreateOrConnectWithoutOptionsInput = {
    where: product_variantWhereUniqueInput
    create: XOR<product_variantCreateWithoutOptionsInput, product_variantUncheckedCreateWithoutOptionsInput>
  }

  export type transaction_itemCreateWithoutProduct_optionInput = {
    quantity: number
    price: number
    transaction: transactionCreateNestedOneWithoutTransaction_itemInput
  }

  export type transaction_itemUncheckedCreateWithoutProduct_optionInput = {
    id?: number
    quantity: number
    price: number
    transaction_id: number
  }

  export type transaction_itemCreateOrConnectWithoutProduct_optionInput = {
    where: transaction_itemWhereUniqueInput
    create: XOR<transaction_itemCreateWithoutProduct_optionInput, transaction_itemUncheckedCreateWithoutProduct_optionInput>
  }

  export type transaction_itemCreateManyProduct_optionInputEnvelope = {
    data: transaction_itemCreateManyProduct_optionInput | transaction_itemCreateManyProduct_optionInput[]
    skipDuplicates?: boolean
  }

  export type product_historyCreateWithoutProduct_optionInput = {
    change_type?: $Enums.product_history_change_type
    quantity_before: number
    quantity_after: number
    changed_at?: Date | string
  }

  export type product_historyUncheckedCreateWithoutProduct_optionInput = {
    id?: number
    change_type?: $Enums.product_history_change_type
    quantity_before: number
    quantity_after: number
    changed_at?: Date | string
  }

  export type product_historyCreateOrConnectWithoutProduct_optionInput = {
    where: product_historyWhereUniqueInput
    create: XOR<product_historyCreateWithoutProduct_optionInput, product_historyUncheckedCreateWithoutProduct_optionInput>
  }

  export type product_historyCreateManyProduct_optionInputEnvelope = {
    data: product_historyCreateManyProduct_optionInput | product_historyCreateManyProduct_optionInput[]
    skipDuplicates?: boolean
  }

  export type preorderCreateWithoutProduct_optionInput = {
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    customer: userCreateNestedOneWithoutPreorderInput
  }

  export type preorderUncheckedCreateWithoutProduct_optionInput = {
    id?: number
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    customer_id: string
  }

  export type preorderCreateOrConnectWithoutProduct_optionInput = {
    where: preorderWhereUniqueInput
    create: XOR<preorderCreateWithoutProduct_optionInput, preorderUncheckedCreateWithoutProduct_optionInput>
  }

  export type preorderCreateManyProduct_optionInputEnvelope = {
    data: preorderCreateManyProduct_optionInput | preorderCreateManyProduct_optionInput[]
    skipDuplicates?: boolean
  }

  export type product_variantUpsertWithoutOptionsInput = {
    update: XOR<product_variantUpdateWithoutOptionsInput, product_variantUncheckedUpdateWithoutOptionsInput>
    create: XOR<product_variantCreateWithoutOptionsInput, product_variantUncheckedCreateWithoutOptionsInput>
    where?: product_variantWhereInput
  }

  export type product_variantUpdateToOneWithWhereWithoutOptionsInput = {
    where?: product_variantWhereInput
    data: XOR<product_variantUpdateWithoutOptionsInput, product_variantUncheckedUpdateWithoutOptionsInput>
  }

  export type product_variantUpdateWithoutOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type product_variantUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_itemUpsertWithWhereUniqueWithoutProduct_optionInput = {
    where: transaction_itemWhereUniqueInput
    update: XOR<transaction_itemUpdateWithoutProduct_optionInput, transaction_itemUncheckedUpdateWithoutProduct_optionInput>
    create: XOR<transaction_itemCreateWithoutProduct_optionInput, transaction_itemUncheckedCreateWithoutProduct_optionInput>
  }

  export type transaction_itemUpdateWithWhereUniqueWithoutProduct_optionInput = {
    where: transaction_itemWhereUniqueInput
    data: XOR<transaction_itemUpdateWithoutProduct_optionInput, transaction_itemUncheckedUpdateWithoutProduct_optionInput>
  }

  export type transaction_itemUpdateManyWithWhereWithoutProduct_optionInput = {
    where: transaction_itemScalarWhereInput
    data: XOR<transaction_itemUpdateManyMutationInput, transaction_itemUncheckedUpdateManyWithoutProduct_optionInput>
  }

  export type transaction_itemScalarWhereInput = {
    AND?: transaction_itemScalarWhereInput | transaction_itemScalarWhereInput[]
    OR?: transaction_itemScalarWhereInput[]
    NOT?: transaction_itemScalarWhereInput | transaction_itemScalarWhereInput[]
    id?: IntFilter<"transaction_item"> | number
    quantity?: IntFilter<"transaction_item"> | number
    price?: IntFilter<"transaction_item"> | number
    product_option_id?: IntFilter<"transaction_item"> | number
    transaction_id?: IntFilter<"transaction_item"> | number
  }

  export type product_historyUpsertWithWhereUniqueWithoutProduct_optionInput = {
    where: product_historyWhereUniqueInput
    update: XOR<product_historyUpdateWithoutProduct_optionInput, product_historyUncheckedUpdateWithoutProduct_optionInput>
    create: XOR<product_historyCreateWithoutProduct_optionInput, product_historyUncheckedCreateWithoutProduct_optionInput>
  }

  export type product_historyUpdateWithWhereUniqueWithoutProduct_optionInput = {
    where: product_historyWhereUniqueInput
    data: XOR<product_historyUpdateWithoutProduct_optionInput, product_historyUncheckedUpdateWithoutProduct_optionInput>
  }

  export type product_historyUpdateManyWithWhereWithoutProduct_optionInput = {
    where: product_historyScalarWhereInput
    data: XOR<product_historyUpdateManyMutationInput, product_historyUncheckedUpdateManyWithoutProduct_optionInput>
  }

  export type product_historyScalarWhereInput = {
    AND?: product_historyScalarWhereInput | product_historyScalarWhereInput[]
    OR?: product_historyScalarWhereInput[]
    NOT?: product_historyScalarWhereInput | product_historyScalarWhereInput[]
    id?: IntFilter<"product_history"> | number
    product_option_id?: IntFilter<"product_history"> | number
    change_type?: Enumproduct_history_change_typeFilter<"product_history"> | $Enums.product_history_change_type
    quantity_before?: IntFilter<"product_history"> | number
    quantity_after?: IntFilter<"product_history"> | number
    changed_at?: DateTimeFilter<"product_history"> | Date | string
  }

  export type preorderUpsertWithWhereUniqueWithoutProduct_optionInput = {
    where: preorderWhereUniqueInput
    update: XOR<preorderUpdateWithoutProduct_optionInput, preorderUncheckedUpdateWithoutProduct_optionInput>
    create: XOR<preorderCreateWithoutProduct_optionInput, preorderUncheckedCreateWithoutProduct_optionInput>
  }

  export type preorderUpdateWithWhereUniqueWithoutProduct_optionInput = {
    where: preorderWhereUniqueInput
    data: XOR<preorderUpdateWithoutProduct_optionInput, preorderUncheckedUpdateWithoutProduct_optionInput>
  }

  export type preorderUpdateManyWithWhereWithoutProduct_optionInput = {
    where: preorderScalarWhereInput
    data: XOR<preorderUpdateManyMutationInput, preorderUncheckedUpdateManyWithoutProduct_optionInput>
  }

  export type product_optionCreateWithoutProduct_historyInput = {
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    created_at?: Date | string
    updated_at?: Date | string
    variant: product_variantCreateNestedOneWithoutOptionsInput
    transaction_items?: transaction_itemCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionUncheckedCreateWithoutProduct_historyInput = {
    id?: number
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    variant_id: number
    created_at?: Date | string
    updated_at?: Date | string
    transaction_items?: transaction_itemUncheckedCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderUncheckedCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionCreateOrConnectWithoutProduct_historyInput = {
    where: product_optionWhereUniqueInput
    create: XOR<product_optionCreateWithoutProduct_historyInput, product_optionUncheckedCreateWithoutProduct_historyInput>
  }

  export type product_optionUpsertWithoutProduct_historyInput = {
    update: XOR<product_optionUpdateWithoutProduct_historyInput, product_optionUncheckedUpdateWithoutProduct_historyInput>
    create: XOR<product_optionCreateWithoutProduct_historyInput, product_optionUncheckedCreateWithoutProduct_historyInput>
    where?: product_optionWhereInput
  }

  export type product_optionUpdateToOneWithWhereWithoutProduct_historyInput = {
    where?: product_optionWhereInput
    data: XOR<product_optionUpdateWithoutProduct_historyInput, product_optionUncheckedUpdateWithoutProduct_historyInput>
  }

  export type product_optionUpdateWithoutProduct_historyInput = {
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: product_variantUpdateOneRequiredWithoutOptionsNestedInput
    transaction_items?: transaction_itemUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUpdateManyWithoutProduct_optionNestedInput
  }

  export type product_optionUncheckedUpdateWithoutProduct_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    variant_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_items?: transaction_itemUncheckedUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUncheckedUpdateManyWithoutProduct_optionNestedInput
  }

  export type userCreateWithoutTransactionInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    audit?: auditCreateNestedManyWithoutUserInput
    preorder?: preorderCreateNestedManyWithoutCustomerInput
  }

  export type userUncheckedCreateWithoutTransactionInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.user_role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatar?: string | null
    last_login?: Date | string | null
    audit?: auditUncheckedCreateNestedManyWithoutUserInput
    preorder?: preorderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type userCreateOrConnectWithoutTransactionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_itemCreateWithoutTransactionInput = {
    quantity: number
    price: number
    product_option: product_optionCreateNestedOneWithoutTransaction_itemsInput
  }

  export type transaction_itemUncheckedCreateWithoutTransactionInput = {
    id?: number
    quantity: number
    price: number
    product_option_id: number
  }

  export type transaction_itemCreateOrConnectWithoutTransactionInput = {
    where: transaction_itemWhereUniqueInput
    create: XOR<transaction_itemCreateWithoutTransactionInput, transaction_itemUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_itemCreateManyTransactionInputEnvelope = {
    data: transaction_itemCreateManyTransactionInput | transaction_itemCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutTransactionInput = {
    update: XOR<userUpdateWithoutTransactionInput, userUncheckedUpdateWithoutTransactionInput>
    create: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTransactionInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTransactionInput, userUncheckedUpdateWithoutTransactionInput>
  }

  export type userUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit?: auditUpdateManyWithoutUserNestedInput
    preorder?: preorderUpdateManyWithoutCustomerNestedInput
  }

  export type userUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit?: auditUncheckedUpdateManyWithoutUserNestedInput
    preorder?: preorderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type transaction_itemUpsertWithWhereUniqueWithoutTransactionInput = {
    where: transaction_itemWhereUniqueInput
    update: XOR<transaction_itemUpdateWithoutTransactionInput, transaction_itemUncheckedUpdateWithoutTransactionInput>
    create: XOR<transaction_itemCreateWithoutTransactionInput, transaction_itemUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_itemUpdateWithWhereUniqueWithoutTransactionInput = {
    where: transaction_itemWhereUniqueInput
    data: XOR<transaction_itemUpdateWithoutTransactionInput, transaction_itemUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_itemUpdateManyWithWhereWithoutTransactionInput = {
    where: transaction_itemScalarWhereInput
    data: XOR<transaction_itemUpdateManyMutationInput, transaction_itemUncheckedUpdateManyWithoutTransactionInput>
  }

  export type product_optionCreateWithoutTransaction_itemsInput = {
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    created_at?: Date | string
    updated_at?: Date | string
    variant: product_variantCreateNestedOneWithoutOptionsInput
    product_history?: product_historyCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionUncheckedCreateWithoutTransaction_itemsInput = {
    id?: number
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    variant_id: number
    created_at?: Date | string
    updated_at?: Date | string
    product_history?: product_historyUncheckedCreateNestedManyWithoutProduct_optionInput
    preorder?: preorderUncheckedCreateNestedManyWithoutProduct_optionInput
  }

  export type product_optionCreateOrConnectWithoutTransaction_itemsInput = {
    where: product_optionWhereUniqueInput
    create: XOR<product_optionCreateWithoutTransaction_itemsInput, product_optionUncheckedCreateWithoutTransaction_itemsInput>
  }

  export type transactionCreateWithoutTransaction_itemInput = {
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
    customer?: userCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutTransaction_itemInput = {
    id?: number
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
    customer_id?: string | null
  }

  export type transactionCreateOrConnectWithoutTransaction_itemInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutTransaction_itemInput, transactionUncheckedCreateWithoutTransaction_itemInput>
  }

  export type product_optionUpsertWithoutTransaction_itemsInput = {
    update: XOR<product_optionUpdateWithoutTransaction_itemsInput, product_optionUncheckedUpdateWithoutTransaction_itemsInput>
    create: XOR<product_optionCreateWithoutTransaction_itemsInput, product_optionUncheckedCreateWithoutTransaction_itemsInput>
    where?: product_optionWhereInput
  }

  export type product_optionUpdateToOneWithWhereWithoutTransaction_itemsInput = {
    where?: product_optionWhereInput
    data: XOR<product_optionUpdateWithoutTransaction_itemsInput, product_optionUncheckedUpdateWithoutTransaction_itemsInput>
  }

  export type product_optionUpdateWithoutTransaction_itemsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    variant?: product_variantUpdateOneRequiredWithoutOptionsNestedInput
    product_history?: product_historyUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUpdateManyWithoutProduct_optionNestedInput
  }

  export type product_optionUncheckedUpdateWithoutTransaction_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    variant_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history?: product_historyUncheckedUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUncheckedUpdateManyWithoutProduct_optionNestedInput
  }

  export type transactionUpsertWithoutTransaction_itemInput = {
    update: XOR<transactionUpdateWithoutTransaction_itemInput, transactionUncheckedUpdateWithoutTransaction_itemInput>
    create: XOR<transactionCreateWithoutTransaction_itemInput, transactionUncheckedCreateWithoutTransaction_itemInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutTransaction_itemInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutTransaction_itemInput, transactionUncheckedUpdateWithoutTransaction_itemInput>
  }

  export type transactionUpdateWithoutTransaction_itemInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: userUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutTransaction_itemInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type auditCreateManyUserInput = {
    id?: number
    action: string
    action_url?: string | null
    ip_address?: string | null
    created_at?: Date | string
  }

  export type preorderCreateManyCustomerInput = {
    id?: number
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    product_option_id: number
  }

  export type transactionCreateManyCustomerInput = {
    id?: number
    total: number
    status?: $Enums.transaction_status
    created_at?: Date | string
    updated_at: Date | string
  }

  export type auditUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_url?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_url?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_url?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type preorderUpdateWithoutCustomerInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_option?: product_optionUpdateOneRequiredWithoutPreorderNestedInput
  }

  export type preorderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_option_id?: IntFieldUpdateOperationsInput | number
  }

  export type preorderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_option_id?: IntFieldUpdateOperationsInput | number
  }

  export type transactionUpdateWithoutCustomerInput = {
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_item?: transaction_itemUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_item?: transaction_itemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateManyCategoryInput = {
    id?: number
    name: string
    image?: string | null
    inventoryId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: inventoryUpdateOneWithoutProductNestedInput
    variants?: product_variantUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: product_variantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateManyInventoryInput = {
    id?: number
    name: string
    image?: string | null
    category_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type productUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneWithoutProductNestedInput
    variants?: product_variantUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: product_variantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_variantCreateManyProductInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type product_variantUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: product_optionUpdateManyWithoutVariantNestedInput
  }

  export type product_variantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: product_optionUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type product_variantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_optionCreateManyVariantInput = {
    id?: number
    sku: string
    image?: string | null
    price: number
    cost?: number
    stock?: number
    option_value: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type product_optionUpdateWithoutVariantInput = {
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_items?: transaction_itemUpdateManyWithoutProduct_optionNestedInput
    product_history?: product_historyUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUpdateManyWithoutProduct_optionNestedInput
  }

  export type product_optionUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_items?: transaction_itemUncheckedUpdateManyWithoutProduct_optionNestedInput
    product_history?: product_historyUncheckedUpdateManyWithoutProduct_optionNestedInput
    preorder?: preorderUncheckedUpdateManyWithoutProduct_optionNestedInput
  }

  export type product_optionUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_itemCreateManyProduct_optionInput = {
    id?: number
    quantity: number
    price: number
    transaction_id: number
  }

  export type product_historyCreateManyProduct_optionInput = {
    id?: number
    change_type?: $Enums.product_history_change_type
    quantity_before: number
    quantity_after: number
    changed_at?: Date | string
  }

  export type preorderCreateManyProduct_optionInput = {
    id?: number
    quantity: number
    status?: $Enums.preorder_status
    created_at?: Date | string
    updated_at?: Date | string
    customer_id: string
  }

  export type transaction_itemUpdateWithoutProduct_optionInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    transaction?: transactionUpdateOneRequiredWithoutTransaction_itemNestedInput
  }

  export type transaction_itemUncheckedUpdateWithoutProduct_optionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_itemUncheckedUpdateManyWithoutProduct_optionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_historyUpdateWithoutProduct_optionInput = {
    change_type?: Enumproduct_history_change_typeFieldUpdateOperationsInput | $Enums.product_history_change_type
    quantity_before?: IntFieldUpdateOperationsInput | number
    quantity_after?: IntFieldUpdateOperationsInput | number
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_historyUncheckedUpdateWithoutProduct_optionInput = {
    id?: IntFieldUpdateOperationsInput | number
    change_type?: Enumproduct_history_change_typeFieldUpdateOperationsInput | $Enums.product_history_change_type
    quantity_before?: IntFieldUpdateOperationsInput | number
    quantity_after?: IntFieldUpdateOperationsInput | number
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_historyUncheckedUpdateManyWithoutProduct_optionInput = {
    id?: IntFieldUpdateOperationsInput | number
    change_type?: Enumproduct_history_change_typeFieldUpdateOperationsInput | $Enums.product_history_change_type
    quantity_before?: IntFieldUpdateOperationsInput | number
    quantity_after?: IntFieldUpdateOperationsInput | number
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type preorderUpdateWithoutProduct_optionInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: userUpdateOneRequiredWithoutPreorderNestedInput
  }

  export type preorderUncheckedUpdateWithoutProduct_optionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type preorderUncheckedUpdateManyWithoutProduct_optionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    status?: Enumpreorder_statusFieldUpdateOperationsInput | $Enums.preorder_status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type transaction_itemCreateManyTransactionInput = {
    id?: number
    quantity: number
    price: number
    product_option_id: number
  }

  export type transaction_itemUpdateWithoutTransactionInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product_option?: product_optionUpdateOneRequiredWithoutTransaction_itemsNestedInput
  }

  export type transaction_itemUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product_option_id?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_itemUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    product_option_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}