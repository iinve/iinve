
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
 * Model DigitalWall
 * 
 */
export type DigitalWall = $Result.DefaultSelection<Prisma.$DigitalWallPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model NewArrival
 * 
 */
export type NewArrival = $Result.DefaultSelection<Prisma.$NewArrivalPayload>
/**
 * Model DigitalWallUser
 * 
 */
export type DigitalWallUser = $Result.DefaultSelection<Prisma.$DigitalWallUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DigitalWalls
 * const digitalWalls = await prisma.digitalWall.findMany()
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
   * // Fetch zero or more DigitalWalls
   * const digitalWalls = await prisma.digitalWall.findMany()
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
   * `prisma.digitalWall`: Exposes CRUD operations for the **DigitalWall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DigitalWalls
    * const digitalWalls = await prisma.digitalWall.findMany()
    * ```
    */
  get digitalWall(): Prisma.DigitalWallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newArrival`: Exposes CRUD operations for the **NewArrival** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewArrivals
    * const newArrivals = await prisma.newArrival.findMany()
    * ```
    */
  get newArrival(): Prisma.NewArrivalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.digitalWallUser`: Exposes CRUD operations for the **DigitalWallUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DigitalWallUsers
    * const digitalWallUsers = await prisma.digitalWallUser.findMany()
    * ```
    */
  get digitalWallUser(): Prisma.DigitalWallUserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    DigitalWall: 'DigitalWall',
    Category: 'Category',
    Product: 'Product',
    Banner: 'Banner',
    NewArrival: 'NewArrival',
    DigitalWallUser: 'DigitalWallUser'
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
      modelProps: "digitalWall" | "category" | "product" | "banner" | "newArrival" | "digitalWallUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DigitalWall: {
        payload: Prisma.$DigitalWallPayload<ExtArgs>
        fields: Prisma.DigitalWallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DigitalWallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DigitalWallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>
          }
          findFirst: {
            args: Prisma.DigitalWallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DigitalWallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>
          }
          findMany: {
            args: Prisma.DigitalWallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>[]
          }
          create: {
            args: Prisma.DigitalWallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>
          }
          createMany: {
            args: Prisma.DigitalWallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DigitalWallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>[]
          }
          delete: {
            args: Prisma.DigitalWallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>
          }
          update: {
            args: Prisma.DigitalWallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>
          }
          deleteMany: {
            args: Prisma.DigitalWallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DigitalWallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DigitalWallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>[]
          }
          upsert: {
            args: Prisma.DigitalWallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallPayload>
          }
          aggregate: {
            args: Prisma.DigitalWallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDigitalWall>
          }
          groupBy: {
            args: Prisma.DigitalWallGroupByArgs<ExtArgs>
            result: $Utils.Optional<DigitalWallGroupByOutputType>[]
          }
          count: {
            args: Prisma.DigitalWallCountArgs<ExtArgs>
            result: $Utils.Optional<DigitalWallCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      NewArrival: {
        payload: Prisma.$NewArrivalPayload<ExtArgs>
        fields: Prisma.NewArrivalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewArrivalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewArrivalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>
          }
          findFirst: {
            args: Prisma.NewArrivalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewArrivalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>
          }
          findMany: {
            args: Prisma.NewArrivalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>[]
          }
          create: {
            args: Prisma.NewArrivalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>
          }
          createMany: {
            args: Prisma.NewArrivalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewArrivalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>[]
          }
          delete: {
            args: Prisma.NewArrivalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>
          }
          update: {
            args: Prisma.NewArrivalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>
          }
          deleteMany: {
            args: Prisma.NewArrivalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewArrivalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewArrivalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>[]
          }
          upsert: {
            args: Prisma.NewArrivalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewArrivalPayload>
          }
          aggregate: {
            args: Prisma.NewArrivalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewArrival>
          }
          groupBy: {
            args: Prisma.NewArrivalGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewArrivalGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewArrivalCountArgs<ExtArgs>
            result: $Utils.Optional<NewArrivalCountAggregateOutputType> | number
          }
        }
      }
      DigitalWallUser: {
        payload: Prisma.$DigitalWallUserPayload<ExtArgs>
        fields: Prisma.DigitalWallUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DigitalWallUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DigitalWallUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>
          }
          findFirst: {
            args: Prisma.DigitalWallUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DigitalWallUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>
          }
          findMany: {
            args: Prisma.DigitalWallUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>[]
          }
          create: {
            args: Prisma.DigitalWallUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>
          }
          createMany: {
            args: Prisma.DigitalWallUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DigitalWallUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>[]
          }
          delete: {
            args: Prisma.DigitalWallUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>
          }
          update: {
            args: Prisma.DigitalWallUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>
          }
          deleteMany: {
            args: Prisma.DigitalWallUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DigitalWallUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DigitalWallUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>[]
          }
          upsert: {
            args: Prisma.DigitalWallUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DigitalWallUserPayload>
          }
          aggregate: {
            args: Prisma.DigitalWallUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDigitalWallUser>
          }
          groupBy: {
            args: Prisma.DigitalWallUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<DigitalWallUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.DigitalWallUserCountArgs<ExtArgs>
            result: $Utils.Optional<DigitalWallUserCountAggregateOutputType> | number
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
    digitalWall?: DigitalWallOmit
    category?: CategoryOmit
    product?: ProductOmit
    banner?: BannerOmit
    newArrival?: NewArrivalOmit
    digitalWallUser?: DigitalWallUserOmit
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
   * Count Type DigitalWallCountOutputType
   */

  export type DigitalWallCountOutputType = {
    categories: number
    products: number
    banners: number
    newArrivals: number
  }

  export type DigitalWallCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | DigitalWallCountOutputTypeCountCategoriesArgs
    products?: boolean | DigitalWallCountOutputTypeCountProductsArgs
    banners?: boolean | DigitalWallCountOutputTypeCountBannersArgs
    newArrivals?: boolean | DigitalWallCountOutputTypeCountNewArrivalsArgs
  }

  // Custom InputTypes
  /**
   * DigitalWallCountOutputType without action
   */
  export type DigitalWallCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallCountOutputType
     */
    select?: DigitalWallCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DigitalWallCountOutputType without action
   */
  export type DigitalWallCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * DigitalWallCountOutputType without action
   */
  export type DigitalWallCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * DigitalWallCountOutputType without action
   */
  export type DigitalWallCountOutputTypeCountBannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
  }

  /**
   * DigitalWallCountOutputType without action
   */
  export type DigitalWallCountOutputTypeCountNewArrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewArrivalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DigitalWall
   */

  export type AggregateDigitalWall = {
    _count: DigitalWallCountAggregateOutputType | null
    _min: DigitalWallMinAggregateOutputType | null
    _max: DigitalWallMaxAggregateOutputType | null
  }

  export type DigitalWallMinAggregateOutputType = {
    id: string | null
    wallId: string | null
    spotlightText: string | null
    spotlightImage: string | null
    createdAt: Date | null
  }

  export type DigitalWallMaxAggregateOutputType = {
    id: string | null
    wallId: string | null
    spotlightText: string | null
    spotlightImage: string | null
    createdAt: Date | null
  }

  export type DigitalWallCountAggregateOutputType = {
    id: number
    wallId: number
    spotlightText: number
    spotlightImage: number
    offers: number
    createdAt: number
    _all: number
  }


  export type DigitalWallMinAggregateInputType = {
    id?: true
    wallId?: true
    spotlightText?: true
    spotlightImage?: true
    createdAt?: true
  }

  export type DigitalWallMaxAggregateInputType = {
    id?: true
    wallId?: true
    spotlightText?: true
    spotlightImage?: true
    createdAt?: true
  }

  export type DigitalWallCountAggregateInputType = {
    id?: true
    wallId?: true
    spotlightText?: true
    spotlightImage?: true
    offers?: true
    createdAt?: true
    _all?: true
  }

  export type DigitalWallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalWall to aggregate.
     */
    where?: DigitalWallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWalls to fetch.
     */
    orderBy?: DigitalWallOrderByWithRelationInput | DigitalWallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DigitalWallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DigitalWalls
    **/
    _count?: true | DigitalWallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DigitalWallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DigitalWallMaxAggregateInputType
  }

  export type GetDigitalWallAggregateType<T extends DigitalWallAggregateArgs> = {
        [P in keyof T & keyof AggregateDigitalWall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDigitalWall[P]>
      : GetScalarType<T[P], AggregateDigitalWall[P]>
  }




  export type DigitalWallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DigitalWallWhereInput
    orderBy?: DigitalWallOrderByWithAggregationInput | DigitalWallOrderByWithAggregationInput[]
    by: DigitalWallScalarFieldEnum[] | DigitalWallScalarFieldEnum
    having?: DigitalWallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DigitalWallCountAggregateInputType | true
    _min?: DigitalWallMinAggregateInputType
    _max?: DigitalWallMaxAggregateInputType
  }

  export type DigitalWallGroupByOutputType = {
    id: string
    wallId: string
    spotlightText: string | null
    spotlightImage: string | null
    offers: JsonValue
    createdAt: Date
    _count: DigitalWallCountAggregateOutputType | null
    _min: DigitalWallMinAggregateOutputType | null
    _max: DigitalWallMaxAggregateOutputType | null
  }

  type GetDigitalWallGroupByPayload<T extends DigitalWallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DigitalWallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DigitalWallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DigitalWallGroupByOutputType[P]>
            : GetScalarType<T[P], DigitalWallGroupByOutputType[P]>
        }
      >
    >


  export type DigitalWallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallId?: boolean
    spotlightText?: boolean
    spotlightImage?: boolean
    offers?: boolean
    createdAt?: boolean
    categories?: boolean | DigitalWall$categoriesArgs<ExtArgs>
    products?: boolean | DigitalWall$productsArgs<ExtArgs>
    banners?: boolean | DigitalWall$bannersArgs<ExtArgs>
    newArrivals?: boolean | DigitalWall$newArrivalsArgs<ExtArgs>
    _count?: boolean | DigitalWallCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["digitalWall"]>

  export type DigitalWallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallId?: boolean
    spotlightText?: boolean
    spotlightImage?: boolean
    offers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["digitalWall"]>

  export type DigitalWallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallId?: boolean
    spotlightText?: boolean
    spotlightImage?: boolean
    offers?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["digitalWall"]>

  export type DigitalWallSelectScalar = {
    id?: boolean
    wallId?: boolean
    spotlightText?: boolean
    spotlightImage?: boolean
    offers?: boolean
    createdAt?: boolean
  }

  export type DigitalWallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wallId" | "spotlightText" | "spotlightImage" | "offers" | "createdAt", ExtArgs["result"]["digitalWall"]>
  export type DigitalWallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | DigitalWall$categoriesArgs<ExtArgs>
    products?: boolean | DigitalWall$productsArgs<ExtArgs>
    banners?: boolean | DigitalWall$bannersArgs<ExtArgs>
    newArrivals?: boolean | DigitalWall$newArrivalsArgs<ExtArgs>
    _count?: boolean | DigitalWallCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DigitalWallIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DigitalWallIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DigitalWallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DigitalWall"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      banners: Prisma.$BannerPayload<ExtArgs>[]
      newArrivals: Prisma.$NewArrivalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wallId: string
      spotlightText: string | null
      spotlightImage: string | null
      offers: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["digitalWall"]>
    composites: {}
  }

  type DigitalWallGetPayload<S extends boolean | null | undefined | DigitalWallDefaultArgs> = $Result.GetResult<Prisma.$DigitalWallPayload, S>

  type DigitalWallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DigitalWallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DigitalWallCountAggregateInputType | true
    }

  export interface DigitalWallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DigitalWall'], meta: { name: 'DigitalWall' } }
    /**
     * Find zero or one DigitalWall that matches the filter.
     * @param {DigitalWallFindUniqueArgs} args - Arguments to find a DigitalWall
     * @example
     * // Get one DigitalWall
     * const digitalWall = await prisma.digitalWall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DigitalWallFindUniqueArgs>(args: SelectSubset<T, DigitalWallFindUniqueArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DigitalWall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DigitalWallFindUniqueOrThrowArgs} args - Arguments to find a DigitalWall
     * @example
     * // Get one DigitalWall
     * const digitalWall = await prisma.digitalWall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DigitalWallFindUniqueOrThrowArgs>(args: SelectSubset<T, DigitalWallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalWall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallFindFirstArgs} args - Arguments to find a DigitalWall
     * @example
     * // Get one DigitalWall
     * const digitalWall = await prisma.digitalWall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DigitalWallFindFirstArgs>(args?: SelectSubset<T, DigitalWallFindFirstArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalWall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallFindFirstOrThrowArgs} args - Arguments to find a DigitalWall
     * @example
     * // Get one DigitalWall
     * const digitalWall = await prisma.digitalWall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DigitalWallFindFirstOrThrowArgs>(args?: SelectSubset<T, DigitalWallFindFirstOrThrowArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DigitalWalls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DigitalWalls
     * const digitalWalls = await prisma.digitalWall.findMany()
     * 
     * // Get first 10 DigitalWalls
     * const digitalWalls = await prisma.digitalWall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const digitalWallWithIdOnly = await prisma.digitalWall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DigitalWallFindManyArgs>(args?: SelectSubset<T, DigitalWallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DigitalWall.
     * @param {DigitalWallCreateArgs} args - Arguments to create a DigitalWall.
     * @example
     * // Create one DigitalWall
     * const DigitalWall = await prisma.digitalWall.create({
     *   data: {
     *     // ... data to create a DigitalWall
     *   }
     * })
     * 
     */
    create<T extends DigitalWallCreateArgs>(args: SelectSubset<T, DigitalWallCreateArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DigitalWalls.
     * @param {DigitalWallCreateManyArgs} args - Arguments to create many DigitalWalls.
     * @example
     * // Create many DigitalWalls
     * const digitalWall = await prisma.digitalWall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DigitalWallCreateManyArgs>(args?: SelectSubset<T, DigitalWallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DigitalWalls and returns the data saved in the database.
     * @param {DigitalWallCreateManyAndReturnArgs} args - Arguments to create many DigitalWalls.
     * @example
     * // Create many DigitalWalls
     * const digitalWall = await prisma.digitalWall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DigitalWalls and only return the `id`
     * const digitalWallWithIdOnly = await prisma.digitalWall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DigitalWallCreateManyAndReturnArgs>(args?: SelectSubset<T, DigitalWallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DigitalWall.
     * @param {DigitalWallDeleteArgs} args - Arguments to delete one DigitalWall.
     * @example
     * // Delete one DigitalWall
     * const DigitalWall = await prisma.digitalWall.delete({
     *   where: {
     *     // ... filter to delete one DigitalWall
     *   }
     * })
     * 
     */
    delete<T extends DigitalWallDeleteArgs>(args: SelectSubset<T, DigitalWallDeleteArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DigitalWall.
     * @param {DigitalWallUpdateArgs} args - Arguments to update one DigitalWall.
     * @example
     * // Update one DigitalWall
     * const digitalWall = await prisma.digitalWall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DigitalWallUpdateArgs>(args: SelectSubset<T, DigitalWallUpdateArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DigitalWalls.
     * @param {DigitalWallDeleteManyArgs} args - Arguments to filter DigitalWalls to delete.
     * @example
     * // Delete a few DigitalWalls
     * const { count } = await prisma.digitalWall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DigitalWallDeleteManyArgs>(args?: SelectSubset<T, DigitalWallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalWalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DigitalWalls
     * const digitalWall = await prisma.digitalWall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DigitalWallUpdateManyArgs>(args: SelectSubset<T, DigitalWallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalWalls and returns the data updated in the database.
     * @param {DigitalWallUpdateManyAndReturnArgs} args - Arguments to update many DigitalWalls.
     * @example
     * // Update many DigitalWalls
     * const digitalWall = await prisma.digitalWall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DigitalWalls and only return the `id`
     * const digitalWallWithIdOnly = await prisma.digitalWall.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DigitalWallUpdateManyAndReturnArgs>(args: SelectSubset<T, DigitalWallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DigitalWall.
     * @param {DigitalWallUpsertArgs} args - Arguments to update or create a DigitalWall.
     * @example
     * // Update or create a DigitalWall
     * const digitalWall = await prisma.digitalWall.upsert({
     *   create: {
     *     // ... data to create a DigitalWall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DigitalWall we want to update
     *   }
     * })
     */
    upsert<T extends DigitalWallUpsertArgs>(args: SelectSubset<T, DigitalWallUpsertArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DigitalWalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallCountArgs} args - Arguments to filter DigitalWalls to count.
     * @example
     * // Count the number of DigitalWalls
     * const count = await prisma.digitalWall.count({
     *   where: {
     *     // ... the filter for the DigitalWalls we want to count
     *   }
     * })
    **/
    count<T extends DigitalWallCountArgs>(
      args?: Subset<T, DigitalWallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DigitalWallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DigitalWall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DigitalWallAggregateArgs>(args: Subset<T, DigitalWallAggregateArgs>): Prisma.PrismaPromise<GetDigitalWallAggregateType<T>>

    /**
     * Group by DigitalWall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallGroupByArgs} args - Group by arguments.
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
      T extends DigitalWallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DigitalWallGroupByArgs['orderBy'] }
        : { orderBy?: DigitalWallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DigitalWallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDigitalWallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DigitalWall model
   */
  readonly fields: DigitalWallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DigitalWall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DigitalWallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends DigitalWall$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWall$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends DigitalWall$productsArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWall$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    banners<T extends DigitalWall$bannersArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWall$bannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newArrivals<T extends DigitalWall$newArrivalsArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWall$newArrivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DigitalWall model
   */
  interface DigitalWallFieldRefs {
    readonly id: FieldRef<"DigitalWall", 'String'>
    readonly wallId: FieldRef<"DigitalWall", 'String'>
    readonly spotlightText: FieldRef<"DigitalWall", 'String'>
    readonly spotlightImage: FieldRef<"DigitalWall", 'String'>
    readonly offers: FieldRef<"DigitalWall", 'Json'>
    readonly createdAt: FieldRef<"DigitalWall", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DigitalWall findUnique
   */
  export type DigitalWallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * Filter, which DigitalWall to fetch.
     */
    where: DigitalWallWhereUniqueInput
  }

  /**
   * DigitalWall findUniqueOrThrow
   */
  export type DigitalWallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * Filter, which DigitalWall to fetch.
     */
    where: DigitalWallWhereUniqueInput
  }

  /**
   * DigitalWall findFirst
   */
  export type DigitalWallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * Filter, which DigitalWall to fetch.
     */
    where?: DigitalWallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWalls to fetch.
     */
    orderBy?: DigitalWallOrderByWithRelationInput | DigitalWallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalWalls.
     */
    cursor?: DigitalWallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalWalls.
     */
    distinct?: DigitalWallScalarFieldEnum | DigitalWallScalarFieldEnum[]
  }

  /**
   * DigitalWall findFirstOrThrow
   */
  export type DigitalWallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * Filter, which DigitalWall to fetch.
     */
    where?: DigitalWallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWalls to fetch.
     */
    orderBy?: DigitalWallOrderByWithRelationInput | DigitalWallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalWalls.
     */
    cursor?: DigitalWallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalWalls.
     */
    distinct?: DigitalWallScalarFieldEnum | DigitalWallScalarFieldEnum[]
  }

  /**
   * DigitalWall findMany
   */
  export type DigitalWallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * Filter, which DigitalWalls to fetch.
     */
    where?: DigitalWallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWalls to fetch.
     */
    orderBy?: DigitalWallOrderByWithRelationInput | DigitalWallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DigitalWalls.
     */
    cursor?: DigitalWallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWalls.
     */
    skip?: number
    distinct?: DigitalWallScalarFieldEnum | DigitalWallScalarFieldEnum[]
  }

  /**
   * DigitalWall create
   */
  export type DigitalWallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * The data needed to create a DigitalWall.
     */
    data: XOR<DigitalWallCreateInput, DigitalWallUncheckedCreateInput>
  }

  /**
   * DigitalWall createMany
   */
  export type DigitalWallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DigitalWalls.
     */
    data: DigitalWallCreateManyInput | DigitalWallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalWall createManyAndReturn
   */
  export type DigitalWallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * The data used to create many DigitalWalls.
     */
    data: DigitalWallCreateManyInput | DigitalWallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalWall update
   */
  export type DigitalWallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * The data needed to update a DigitalWall.
     */
    data: XOR<DigitalWallUpdateInput, DigitalWallUncheckedUpdateInput>
    /**
     * Choose, which DigitalWall to update.
     */
    where: DigitalWallWhereUniqueInput
  }

  /**
   * DigitalWall updateMany
   */
  export type DigitalWallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DigitalWalls.
     */
    data: XOR<DigitalWallUpdateManyMutationInput, DigitalWallUncheckedUpdateManyInput>
    /**
     * Filter which DigitalWalls to update
     */
    where?: DigitalWallWhereInput
    /**
     * Limit how many DigitalWalls to update.
     */
    limit?: number
  }

  /**
   * DigitalWall updateManyAndReturn
   */
  export type DigitalWallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * The data used to update DigitalWalls.
     */
    data: XOR<DigitalWallUpdateManyMutationInput, DigitalWallUncheckedUpdateManyInput>
    /**
     * Filter which DigitalWalls to update
     */
    where?: DigitalWallWhereInput
    /**
     * Limit how many DigitalWalls to update.
     */
    limit?: number
  }

  /**
   * DigitalWall upsert
   */
  export type DigitalWallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * The filter to search for the DigitalWall to update in case it exists.
     */
    where: DigitalWallWhereUniqueInput
    /**
     * In case the DigitalWall found by the `where` argument doesn't exist, create a new DigitalWall with this data.
     */
    create: XOR<DigitalWallCreateInput, DigitalWallUncheckedCreateInput>
    /**
     * In case the DigitalWall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DigitalWallUpdateInput, DigitalWallUncheckedUpdateInput>
  }

  /**
   * DigitalWall delete
   */
  export type DigitalWallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
    /**
     * Filter which DigitalWall to delete.
     */
    where: DigitalWallWhereUniqueInput
  }

  /**
   * DigitalWall deleteMany
   */
  export type DigitalWallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalWalls to delete
     */
    where?: DigitalWallWhereInput
    /**
     * Limit how many DigitalWalls to delete.
     */
    limit?: number
  }

  /**
   * DigitalWall.categories
   */
  export type DigitalWall$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * DigitalWall.products
   */
  export type DigitalWall$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * DigitalWall.banners
   */
  export type DigitalWall$bannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    cursor?: BannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * DigitalWall.newArrivals
   */
  export type DigitalWall$newArrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    where?: NewArrivalWhereInput
    orderBy?: NewArrivalOrderByWithRelationInput | NewArrivalOrderByWithRelationInput[]
    cursor?: NewArrivalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewArrivalScalarFieldEnum | NewArrivalScalarFieldEnum[]
  }

  /**
   * DigitalWall without action
   */
  export type DigitalWallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWall
     */
    select?: DigitalWallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWall
     */
    omit?: DigitalWallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DigitalWallInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    digitalWallId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    digitalWallId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    digitalWallId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    digitalWallId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    digitalWallId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    digitalWallId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
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




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    digitalWallId: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
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


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    digitalWallId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "digitalWallId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      digitalWall: Prisma.$DigitalWallPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      digitalWallId: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
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
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
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
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
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
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    digitalWall<T extends DigitalWallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWallDefaultArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly digitalWallId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    weight: string | null
    image: string | null
    categoryName: string | null
    digitalWallId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    weight: string | null
    image: string | null
    categoryName: string | null
    digitalWallId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    weight: number
    image: number
    categoryName: number
    digitalWallId: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    weight?: true
    image?: true
    categoryName?: true
    digitalWallId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    weight?: true
    image?: true
    categoryName?: true
    digitalWallId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    weight?: true
    image?: true
    categoryName?: true
    digitalWallId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
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




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    title: string
    weight: string
    image: string | null
    categoryName: string
    digitalWallId: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
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


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    categoryName?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    categoryName?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    categoryName?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    categoryName?: boolean
    digitalWallId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "weight" | "image" | "categoryName" | "digitalWallId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      digitalWall: Prisma.$DigitalWallPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      weight: string
      image: string | null
      categoryName: string
      digitalWallId: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
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
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
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
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
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
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    digitalWall<T extends DigitalWallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWallDefaultArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly weight: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly categoryName: FieldRef<"Product", 'String'>
    readonly digitalWallId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    text: string | null
    image: string | null
    digitalWallId: string | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    text: string | null
    image: string | null
    digitalWallId: string | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    text: number
    image: number
    digitalWallId: number
    _all: number
  }


  export type BannerMinAggregateInputType = {
    id?: true
    text?: true
    image?: true
    digitalWallId?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    text?: true
    image?: true
    digitalWallId?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    text?: true
    image?: true
    digitalWallId?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    text: string
    image: string | null
    digitalWallId: string
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    image?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    image?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    image?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    text?: boolean
    image?: boolean
    digitalWallId?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "image" | "digitalWallId", ExtArgs["result"]["banner"]>
  export type BannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type BannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type BannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {
      digitalWall: Prisma.$DigitalWallPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      image: string | null
      digitalWallId: string
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    digitalWall<T extends DigitalWallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWallDefaultArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly text: FieldRef<"Banner", 'String'>
    readonly image: FieldRef<"Banner", 'String'>
    readonly digitalWallId: FieldRef<"Banner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
  }


  /**
   * Model NewArrival
   */

  export type AggregateNewArrival = {
    _count: NewArrivalCountAggregateOutputType | null
    _min: NewArrivalMinAggregateOutputType | null
    _max: NewArrivalMaxAggregateOutputType | null
  }

  export type NewArrivalMinAggregateOutputType = {
    id: string | null
    title: string | null
    weight: string | null
    image: string | null
    digitalWallId: string | null
  }

  export type NewArrivalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    weight: string | null
    image: string | null
    digitalWallId: string | null
  }

  export type NewArrivalCountAggregateOutputType = {
    id: number
    title: number
    weight: number
    image: number
    digitalWallId: number
    _all: number
  }


  export type NewArrivalMinAggregateInputType = {
    id?: true
    title?: true
    weight?: true
    image?: true
    digitalWallId?: true
  }

  export type NewArrivalMaxAggregateInputType = {
    id?: true
    title?: true
    weight?: true
    image?: true
    digitalWallId?: true
  }

  export type NewArrivalCountAggregateInputType = {
    id?: true
    title?: true
    weight?: true
    image?: true
    digitalWallId?: true
    _all?: true
  }

  export type NewArrivalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewArrival to aggregate.
     */
    where?: NewArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewArrivals to fetch.
     */
    orderBy?: NewArrivalOrderByWithRelationInput | NewArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewArrivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewArrivals
    **/
    _count?: true | NewArrivalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewArrivalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewArrivalMaxAggregateInputType
  }

  export type GetNewArrivalAggregateType<T extends NewArrivalAggregateArgs> = {
        [P in keyof T & keyof AggregateNewArrival]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewArrival[P]>
      : GetScalarType<T[P], AggregateNewArrival[P]>
  }




  export type NewArrivalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewArrivalWhereInput
    orderBy?: NewArrivalOrderByWithAggregationInput | NewArrivalOrderByWithAggregationInput[]
    by: NewArrivalScalarFieldEnum[] | NewArrivalScalarFieldEnum
    having?: NewArrivalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewArrivalCountAggregateInputType | true
    _min?: NewArrivalMinAggregateInputType
    _max?: NewArrivalMaxAggregateInputType
  }

  export type NewArrivalGroupByOutputType = {
    id: string
    title: string
    weight: string
    image: string | null
    digitalWallId: string
    _count: NewArrivalCountAggregateOutputType | null
    _min: NewArrivalMinAggregateOutputType | null
    _max: NewArrivalMaxAggregateOutputType | null
  }

  type GetNewArrivalGroupByPayload<T extends NewArrivalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewArrivalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewArrivalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewArrivalGroupByOutputType[P]>
            : GetScalarType<T[P], NewArrivalGroupByOutputType[P]>
        }
      >
    >


  export type NewArrivalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newArrival"]>

  export type NewArrivalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newArrival"]>

  export type NewArrivalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    digitalWallId?: boolean
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newArrival"]>

  export type NewArrivalSelectScalar = {
    id?: boolean
    title?: boolean
    weight?: boolean
    image?: boolean
    digitalWallId?: boolean
  }

  export type NewArrivalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "weight" | "image" | "digitalWallId", ExtArgs["result"]["newArrival"]>
  export type NewArrivalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type NewArrivalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }
  export type NewArrivalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    digitalWall?: boolean | DigitalWallDefaultArgs<ExtArgs>
  }

  export type $NewArrivalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewArrival"
    objects: {
      digitalWall: Prisma.$DigitalWallPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      weight: string
      image: string | null
      digitalWallId: string
    }, ExtArgs["result"]["newArrival"]>
    composites: {}
  }

  type NewArrivalGetPayload<S extends boolean | null | undefined | NewArrivalDefaultArgs> = $Result.GetResult<Prisma.$NewArrivalPayload, S>

  type NewArrivalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewArrivalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewArrivalCountAggregateInputType | true
    }

  export interface NewArrivalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewArrival'], meta: { name: 'NewArrival' } }
    /**
     * Find zero or one NewArrival that matches the filter.
     * @param {NewArrivalFindUniqueArgs} args - Arguments to find a NewArrival
     * @example
     * // Get one NewArrival
     * const newArrival = await prisma.newArrival.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewArrivalFindUniqueArgs>(args: SelectSubset<T, NewArrivalFindUniqueArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewArrival that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewArrivalFindUniqueOrThrowArgs} args - Arguments to find a NewArrival
     * @example
     * // Get one NewArrival
     * const newArrival = await prisma.newArrival.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewArrivalFindUniqueOrThrowArgs>(args: SelectSubset<T, NewArrivalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewArrival that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewArrivalFindFirstArgs} args - Arguments to find a NewArrival
     * @example
     * // Get one NewArrival
     * const newArrival = await prisma.newArrival.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewArrivalFindFirstArgs>(args?: SelectSubset<T, NewArrivalFindFirstArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewArrival that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewArrivalFindFirstOrThrowArgs} args - Arguments to find a NewArrival
     * @example
     * // Get one NewArrival
     * const newArrival = await prisma.newArrival.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewArrivalFindFirstOrThrowArgs>(args?: SelectSubset<T, NewArrivalFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewArrivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewArrivalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewArrivals
     * const newArrivals = await prisma.newArrival.findMany()
     * 
     * // Get first 10 NewArrivals
     * const newArrivals = await prisma.newArrival.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newArrivalWithIdOnly = await prisma.newArrival.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewArrivalFindManyArgs>(args?: SelectSubset<T, NewArrivalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewArrival.
     * @param {NewArrivalCreateArgs} args - Arguments to create a NewArrival.
     * @example
     * // Create one NewArrival
     * const NewArrival = await prisma.newArrival.create({
     *   data: {
     *     // ... data to create a NewArrival
     *   }
     * })
     * 
     */
    create<T extends NewArrivalCreateArgs>(args: SelectSubset<T, NewArrivalCreateArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewArrivals.
     * @param {NewArrivalCreateManyArgs} args - Arguments to create many NewArrivals.
     * @example
     * // Create many NewArrivals
     * const newArrival = await prisma.newArrival.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewArrivalCreateManyArgs>(args?: SelectSubset<T, NewArrivalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewArrivals and returns the data saved in the database.
     * @param {NewArrivalCreateManyAndReturnArgs} args - Arguments to create many NewArrivals.
     * @example
     * // Create many NewArrivals
     * const newArrival = await prisma.newArrival.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewArrivals and only return the `id`
     * const newArrivalWithIdOnly = await prisma.newArrival.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewArrivalCreateManyAndReturnArgs>(args?: SelectSubset<T, NewArrivalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewArrival.
     * @param {NewArrivalDeleteArgs} args - Arguments to delete one NewArrival.
     * @example
     * // Delete one NewArrival
     * const NewArrival = await prisma.newArrival.delete({
     *   where: {
     *     // ... filter to delete one NewArrival
     *   }
     * })
     * 
     */
    delete<T extends NewArrivalDeleteArgs>(args: SelectSubset<T, NewArrivalDeleteArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewArrival.
     * @param {NewArrivalUpdateArgs} args - Arguments to update one NewArrival.
     * @example
     * // Update one NewArrival
     * const newArrival = await prisma.newArrival.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewArrivalUpdateArgs>(args: SelectSubset<T, NewArrivalUpdateArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewArrivals.
     * @param {NewArrivalDeleteManyArgs} args - Arguments to filter NewArrivals to delete.
     * @example
     * // Delete a few NewArrivals
     * const { count } = await prisma.newArrival.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewArrivalDeleteManyArgs>(args?: SelectSubset<T, NewArrivalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewArrivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewArrivalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewArrivals
     * const newArrival = await prisma.newArrival.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewArrivalUpdateManyArgs>(args: SelectSubset<T, NewArrivalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewArrivals and returns the data updated in the database.
     * @param {NewArrivalUpdateManyAndReturnArgs} args - Arguments to update many NewArrivals.
     * @example
     * // Update many NewArrivals
     * const newArrival = await prisma.newArrival.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewArrivals and only return the `id`
     * const newArrivalWithIdOnly = await prisma.newArrival.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewArrivalUpdateManyAndReturnArgs>(args: SelectSubset<T, NewArrivalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewArrival.
     * @param {NewArrivalUpsertArgs} args - Arguments to update or create a NewArrival.
     * @example
     * // Update or create a NewArrival
     * const newArrival = await prisma.newArrival.upsert({
     *   create: {
     *     // ... data to create a NewArrival
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewArrival we want to update
     *   }
     * })
     */
    upsert<T extends NewArrivalUpsertArgs>(args: SelectSubset<T, NewArrivalUpsertArgs<ExtArgs>>): Prisma__NewArrivalClient<$Result.GetResult<Prisma.$NewArrivalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewArrivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewArrivalCountArgs} args - Arguments to filter NewArrivals to count.
     * @example
     * // Count the number of NewArrivals
     * const count = await prisma.newArrival.count({
     *   where: {
     *     // ... the filter for the NewArrivals we want to count
     *   }
     * })
    **/
    count<T extends NewArrivalCountArgs>(
      args?: Subset<T, NewArrivalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewArrivalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewArrival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewArrivalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewArrivalAggregateArgs>(args: Subset<T, NewArrivalAggregateArgs>): Prisma.PrismaPromise<GetNewArrivalAggregateType<T>>

    /**
     * Group by NewArrival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewArrivalGroupByArgs} args - Group by arguments.
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
      T extends NewArrivalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewArrivalGroupByArgs['orderBy'] }
        : { orderBy?: NewArrivalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewArrivalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewArrivalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewArrival model
   */
  readonly fields: NewArrivalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewArrival.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewArrivalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    digitalWall<T extends DigitalWallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DigitalWallDefaultArgs<ExtArgs>>): Prisma__DigitalWallClient<$Result.GetResult<Prisma.$DigitalWallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewArrival model
   */
  interface NewArrivalFieldRefs {
    readonly id: FieldRef<"NewArrival", 'String'>
    readonly title: FieldRef<"NewArrival", 'String'>
    readonly weight: FieldRef<"NewArrival", 'String'>
    readonly image: FieldRef<"NewArrival", 'String'>
    readonly digitalWallId: FieldRef<"NewArrival", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewArrival findUnique
   */
  export type NewArrivalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * Filter, which NewArrival to fetch.
     */
    where: NewArrivalWhereUniqueInput
  }

  /**
   * NewArrival findUniqueOrThrow
   */
  export type NewArrivalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * Filter, which NewArrival to fetch.
     */
    where: NewArrivalWhereUniqueInput
  }

  /**
   * NewArrival findFirst
   */
  export type NewArrivalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * Filter, which NewArrival to fetch.
     */
    where?: NewArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewArrivals to fetch.
     */
    orderBy?: NewArrivalOrderByWithRelationInput | NewArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewArrivals.
     */
    cursor?: NewArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewArrivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewArrivals.
     */
    distinct?: NewArrivalScalarFieldEnum | NewArrivalScalarFieldEnum[]
  }

  /**
   * NewArrival findFirstOrThrow
   */
  export type NewArrivalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * Filter, which NewArrival to fetch.
     */
    where?: NewArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewArrivals to fetch.
     */
    orderBy?: NewArrivalOrderByWithRelationInput | NewArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewArrivals.
     */
    cursor?: NewArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewArrivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewArrivals.
     */
    distinct?: NewArrivalScalarFieldEnum | NewArrivalScalarFieldEnum[]
  }

  /**
   * NewArrival findMany
   */
  export type NewArrivalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * Filter, which NewArrivals to fetch.
     */
    where?: NewArrivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewArrivals to fetch.
     */
    orderBy?: NewArrivalOrderByWithRelationInput | NewArrivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewArrivals.
     */
    cursor?: NewArrivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewArrivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewArrivals.
     */
    skip?: number
    distinct?: NewArrivalScalarFieldEnum | NewArrivalScalarFieldEnum[]
  }

  /**
   * NewArrival create
   */
  export type NewArrivalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * The data needed to create a NewArrival.
     */
    data: XOR<NewArrivalCreateInput, NewArrivalUncheckedCreateInput>
  }

  /**
   * NewArrival createMany
   */
  export type NewArrivalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewArrivals.
     */
    data: NewArrivalCreateManyInput | NewArrivalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewArrival createManyAndReturn
   */
  export type NewArrivalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * The data used to create many NewArrivals.
     */
    data: NewArrivalCreateManyInput | NewArrivalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewArrival update
   */
  export type NewArrivalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * The data needed to update a NewArrival.
     */
    data: XOR<NewArrivalUpdateInput, NewArrivalUncheckedUpdateInput>
    /**
     * Choose, which NewArrival to update.
     */
    where: NewArrivalWhereUniqueInput
  }

  /**
   * NewArrival updateMany
   */
  export type NewArrivalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewArrivals.
     */
    data: XOR<NewArrivalUpdateManyMutationInput, NewArrivalUncheckedUpdateManyInput>
    /**
     * Filter which NewArrivals to update
     */
    where?: NewArrivalWhereInput
    /**
     * Limit how many NewArrivals to update.
     */
    limit?: number
  }

  /**
   * NewArrival updateManyAndReturn
   */
  export type NewArrivalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * The data used to update NewArrivals.
     */
    data: XOR<NewArrivalUpdateManyMutationInput, NewArrivalUncheckedUpdateManyInput>
    /**
     * Filter which NewArrivals to update
     */
    where?: NewArrivalWhereInput
    /**
     * Limit how many NewArrivals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewArrival upsert
   */
  export type NewArrivalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * The filter to search for the NewArrival to update in case it exists.
     */
    where: NewArrivalWhereUniqueInput
    /**
     * In case the NewArrival found by the `where` argument doesn't exist, create a new NewArrival with this data.
     */
    create: XOR<NewArrivalCreateInput, NewArrivalUncheckedCreateInput>
    /**
     * In case the NewArrival was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewArrivalUpdateInput, NewArrivalUncheckedUpdateInput>
  }

  /**
   * NewArrival delete
   */
  export type NewArrivalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
    /**
     * Filter which NewArrival to delete.
     */
    where: NewArrivalWhereUniqueInput
  }

  /**
   * NewArrival deleteMany
   */
  export type NewArrivalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewArrivals to delete
     */
    where?: NewArrivalWhereInput
    /**
     * Limit how many NewArrivals to delete.
     */
    limit?: number
  }

  /**
   * NewArrival without action
   */
  export type NewArrivalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewArrival
     */
    select?: NewArrivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewArrival
     */
    omit?: NewArrivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewArrivalInclude<ExtArgs> | null
  }


  /**
   * Model DigitalWallUser
   */

  export type AggregateDigitalWallUser = {
    _count: DigitalWallUserCountAggregateOutputType | null
    _avg: DigitalWallUserAvgAggregateOutputType | null
    _sum: DigitalWallUserSumAggregateOutputType | null
    _min: DigitalWallUserMinAggregateOutputType | null
    _max: DigitalWallUserMaxAggregateOutputType | null
  }

  export type DigitalWallUserAvgAggregateOutputType = {
    userId: number | null
  }

  export type DigitalWallUserSumAggregateOutputType = {
    userId: number | null
  }

  export type DigitalWallUserMinAggregateOutputType = {
    userId: number | null
    email: string | null
    password: string | null
    wall_slug: string | null
    shop_name: string | null
  }

  export type DigitalWallUserMaxAggregateOutputType = {
    userId: number | null
    email: string | null
    password: string | null
    wall_slug: string | null
    shop_name: string | null
  }

  export type DigitalWallUserCountAggregateOutputType = {
    userId: number
    email: number
    password: number
    wall_slug: number
    shop_name: number
    _all: number
  }


  export type DigitalWallUserAvgAggregateInputType = {
    userId?: true
  }

  export type DigitalWallUserSumAggregateInputType = {
    userId?: true
  }

  export type DigitalWallUserMinAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    wall_slug?: true
    shop_name?: true
  }

  export type DigitalWallUserMaxAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    wall_slug?: true
    shop_name?: true
  }

  export type DigitalWallUserCountAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    wall_slug?: true
    shop_name?: true
    _all?: true
  }

  export type DigitalWallUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalWallUser to aggregate.
     */
    where?: DigitalWallUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWallUsers to fetch.
     */
    orderBy?: DigitalWallUserOrderByWithRelationInput | DigitalWallUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DigitalWallUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWallUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWallUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DigitalWallUsers
    **/
    _count?: true | DigitalWallUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DigitalWallUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DigitalWallUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DigitalWallUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DigitalWallUserMaxAggregateInputType
  }

  export type GetDigitalWallUserAggregateType<T extends DigitalWallUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDigitalWallUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDigitalWallUser[P]>
      : GetScalarType<T[P], AggregateDigitalWallUser[P]>
  }




  export type DigitalWallUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DigitalWallUserWhereInput
    orderBy?: DigitalWallUserOrderByWithAggregationInput | DigitalWallUserOrderByWithAggregationInput[]
    by: DigitalWallUserScalarFieldEnum[] | DigitalWallUserScalarFieldEnum
    having?: DigitalWallUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DigitalWallUserCountAggregateInputType | true
    _avg?: DigitalWallUserAvgAggregateInputType
    _sum?: DigitalWallUserSumAggregateInputType
    _min?: DigitalWallUserMinAggregateInputType
    _max?: DigitalWallUserMaxAggregateInputType
  }

  export type DigitalWallUserGroupByOutputType = {
    userId: number
    email: string
    password: string
    wall_slug: string
    shop_name: string
    _count: DigitalWallUserCountAggregateOutputType | null
    _avg: DigitalWallUserAvgAggregateOutputType | null
    _sum: DigitalWallUserSumAggregateOutputType | null
    _min: DigitalWallUserMinAggregateOutputType | null
    _max: DigitalWallUserMaxAggregateOutputType | null
  }

  type GetDigitalWallUserGroupByPayload<T extends DigitalWallUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DigitalWallUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DigitalWallUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DigitalWallUserGroupByOutputType[P]>
            : GetScalarType<T[P], DigitalWallUserGroupByOutputType[P]>
        }
      >
    >


  export type DigitalWallUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    wall_slug?: boolean
    shop_name?: boolean
  }, ExtArgs["result"]["digitalWallUser"]>

  export type DigitalWallUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    wall_slug?: boolean
    shop_name?: boolean
  }, ExtArgs["result"]["digitalWallUser"]>

  export type DigitalWallUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    wall_slug?: boolean
    shop_name?: boolean
  }, ExtArgs["result"]["digitalWallUser"]>

  export type DigitalWallUserSelectScalar = {
    userId?: boolean
    email?: boolean
    password?: boolean
    wall_slug?: boolean
    shop_name?: boolean
  }

  export type DigitalWallUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "password" | "wall_slug" | "shop_name", ExtArgs["result"]["digitalWallUser"]>

  export type $DigitalWallUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DigitalWallUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      email: string
      password: string
      wall_slug: string
      shop_name: string
    }, ExtArgs["result"]["digitalWallUser"]>
    composites: {}
  }

  type DigitalWallUserGetPayload<S extends boolean | null | undefined | DigitalWallUserDefaultArgs> = $Result.GetResult<Prisma.$DigitalWallUserPayload, S>

  type DigitalWallUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DigitalWallUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DigitalWallUserCountAggregateInputType | true
    }

  export interface DigitalWallUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DigitalWallUser'], meta: { name: 'DigitalWallUser' } }
    /**
     * Find zero or one DigitalWallUser that matches the filter.
     * @param {DigitalWallUserFindUniqueArgs} args - Arguments to find a DigitalWallUser
     * @example
     * // Get one DigitalWallUser
     * const digitalWallUser = await prisma.digitalWallUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DigitalWallUserFindUniqueArgs>(args: SelectSubset<T, DigitalWallUserFindUniqueArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DigitalWallUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DigitalWallUserFindUniqueOrThrowArgs} args - Arguments to find a DigitalWallUser
     * @example
     * // Get one DigitalWallUser
     * const digitalWallUser = await prisma.digitalWallUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DigitalWallUserFindUniqueOrThrowArgs>(args: SelectSubset<T, DigitalWallUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalWallUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUserFindFirstArgs} args - Arguments to find a DigitalWallUser
     * @example
     * // Get one DigitalWallUser
     * const digitalWallUser = await prisma.digitalWallUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DigitalWallUserFindFirstArgs>(args?: SelectSubset<T, DigitalWallUserFindFirstArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DigitalWallUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUserFindFirstOrThrowArgs} args - Arguments to find a DigitalWallUser
     * @example
     * // Get one DigitalWallUser
     * const digitalWallUser = await prisma.digitalWallUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DigitalWallUserFindFirstOrThrowArgs>(args?: SelectSubset<T, DigitalWallUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DigitalWallUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DigitalWallUsers
     * const digitalWallUsers = await prisma.digitalWallUser.findMany()
     * 
     * // Get first 10 DigitalWallUsers
     * const digitalWallUsers = await prisma.digitalWallUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const digitalWallUserWithUserIdOnly = await prisma.digitalWallUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends DigitalWallUserFindManyArgs>(args?: SelectSubset<T, DigitalWallUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DigitalWallUser.
     * @param {DigitalWallUserCreateArgs} args - Arguments to create a DigitalWallUser.
     * @example
     * // Create one DigitalWallUser
     * const DigitalWallUser = await prisma.digitalWallUser.create({
     *   data: {
     *     // ... data to create a DigitalWallUser
     *   }
     * })
     * 
     */
    create<T extends DigitalWallUserCreateArgs>(args: SelectSubset<T, DigitalWallUserCreateArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DigitalWallUsers.
     * @param {DigitalWallUserCreateManyArgs} args - Arguments to create many DigitalWallUsers.
     * @example
     * // Create many DigitalWallUsers
     * const digitalWallUser = await prisma.digitalWallUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DigitalWallUserCreateManyArgs>(args?: SelectSubset<T, DigitalWallUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DigitalWallUsers and returns the data saved in the database.
     * @param {DigitalWallUserCreateManyAndReturnArgs} args - Arguments to create many DigitalWallUsers.
     * @example
     * // Create many DigitalWallUsers
     * const digitalWallUser = await prisma.digitalWallUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DigitalWallUsers and only return the `userId`
     * const digitalWallUserWithUserIdOnly = await prisma.digitalWallUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DigitalWallUserCreateManyAndReturnArgs>(args?: SelectSubset<T, DigitalWallUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DigitalWallUser.
     * @param {DigitalWallUserDeleteArgs} args - Arguments to delete one DigitalWallUser.
     * @example
     * // Delete one DigitalWallUser
     * const DigitalWallUser = await prisma.digitalWallUser.delete({
     *   where: {
     *     // ... filter to delete one DigitalWallUser
     *   }
     * })
     * 
     */
    delete<T extends DigitalWallUserDeleteArgs>(args: SelectSubset<T, DigitalWallUserDeleteArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DigitalWallUser.
     * @param {DigitalWallUserUpdateArgs} args - Arguments to update one DigitalWallUser.
     * @example
     * // Update one DigitalWallUser
     * const digitalWallUser = await prisma.digitalWallUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DigitalWallUserUpdateArgs>(args: SelectSubset<T, DigitalWallUserUpdateArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DigitalWallUsers.
     * @param {DigitalWallUserDeleteManyArgs} args - Arguments to filter DigitalWallUsers to delete.
     * @example
     * // Delete a few DigitalWallUsers
     * const { count } = await prisma.digitalWallUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DigitalWallUserDeleteManyArgs>(args?: SelectSubset<T, DigitalWallUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalWallUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DigitalWallUsers
     * const digitalWallUser = await prisma.digitalWallUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DigitalWallUserUpdateManyArgs>(args: SelectSubset<T, DigitalWallUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DigitalWallUsers and returns the data updated in the database.
     * @param {DigitalWallUserUpdateManyAndReturnArgs} args - Arguments to update many DigitalWallUsers.
     * @example
     * // Update many DigitalWallUsers
     * const digitalWallUser = await prisma.digitalWallUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DigitalWallUsers and only return the `userId`
     * const digitalWallUserWithUserIdOnly = await prisma.digitalWallUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DigitalWallUserUpdateManyAndReturnArgs>(args: SelectSubset<T, DigitalWallUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DigitalWallUser.
     * @param {DigitalWallUserUpsertArgs} args - Arguments to update or create a DigitalWallUser.
     * @example
     * // Update or create a DigitalWallUser
     * const digitalWallUser = await prisma.digitalWallUser.upsert({
     *   create: {
     *     // ... data to create a DigitalWallUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DigitalWallUser we want to update
     *   }
     * })
     */
    upsert<T extends DigitalWallUserUpsertArgs>(args: SelectSubset<T, DigitalWallUserUpsertArgs<ExtArgs>>): Prisma__DigitalWallUserClient<$Result.GetResult<Prisma.$DigitalWallUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DigitalWallUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUserCountArgs} args - Arguments to filter DigitalWallUsers to count.
     * @example
     * // Count the number of DigitalWallUsers
     * const count = await prisma.digitalWallUser.count({
     *   where: {
     *     // ... the filter for the DigitalWallUsers we want to count
     *   }
     * })
    **/
    count<T extends DigitalWallUserCountArgs>(
      args?: Subset<T, DigitalWallUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DigitalWallUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DigitalWallUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DigitalWallUserAggregateArgs>(args: Subset<T, DigitalWallUserAggregateArgs>): Prisma.PrismaPromise<GetDigitalWallUserAggregateType<T>>

    /**
     * Group by DigitalWallUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DigitalWallUserGroupByArgs} args - Group by arguments.
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
      T extends DigitalWallUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DigitalWallUserGroupByArgs['orderBy'] }
        : { orderBy?: DigitalWallUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DigitalWallUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDigitalWallUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DigitalWallUser model
   */
  readonly fields: DigitalWallUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DigitalWallUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DigitalWallUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DigitalWallUser model
   */
  interface DigitalWallUserFieldRefs {
    readonly userId: FieldRef<"DigitalWallUser", 'Int'>
    readonly email: FieldRef<"DigitalWallUser", 'String'>
    readonly password: FieldRef<"DigitalWallUser", 'String'>
    readonly wall_slug: FieldRef<"DigitalWallUser", 'String'>
    readonly shop_name: FieldRef<"DigitalWallUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DigitalWallUser findUnique
   */
  export type DigitalWallUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * Filter, which DigitalWallUser to fetch.
     */
    where: DigitalWallUserWhereUniqueInput
  }

  /**
   * DigitalWallUser findUniqueOrThrow
   */
  export type DigitalWallUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * Filter, which DigitalWallUser to fetch.
     */
    where: DigitalWallUserWhereUniqueInput
  }

  /**
   * DigitalWallUser findFirst
   */
  export type DigitalWallUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * Filter, which DigitalWallUser to fetch.
     */
    where?: DigitalWallUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWallUsers to fetch.
     */
    orderBy?: DigitalWallUserOrderByWithRelationInput | DigitalWallUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalWallUsers.
     */
    cursor?: DigitalWallUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWallUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWallUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalWallUsers.
     */
    distinct?: DigitalWallUserScalarFieldEnum | DigitalWallUserScalarFieldEnum[]
  }

  /**
   * DigitalWallUser findFirstOrThrow
   */
  export type DigitalWallUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * Filter, which DigitalWallUser to fetch.
     */
    where?: DigitalWallUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWallUsers to fetch.
     */
    orderBy?: DigitalWallUserOrderByWithRelationInput | DigitalWallUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DigitalWallUsers.
     */
    cursor?: DigitalWallUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWallUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWallUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DigitalWallUsers.
     */
    distinct?: DigitalWallUserScalarFieldEnum | DigitalWallUserScalarFieldEnum[]
  }

  /**
   * DigitalWallUser findMany
   */
  export type DigitalWallUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * Filter, which DigitalWallUsers to fetch.
     */
    where?: DigitalWallUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DigitalWallUsers to fetch.
     */
    orderBy?: DigitalWallUserOrderByWithRelationInput | DigitalWallUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DigitalWallUsers.
     */
    cursor?: DigitalWallUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DigitalWallUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DigitalWallUsers.
     */
    skip?: number
    distinct?: DigitalWallUserScalarFieldEnum | DigitalWallUserScalarFieldEnum[]
  }

  /**
   * DigitalWallUser create
   */
  export type DigitalWallUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * The data needed to create a DigitalWallUser.
     */
    data: XOR<DigitalWallUserCreateInput, DigitalWallUserUncheckedCreateInput>
  }

  /**
   * DigitalWallUser createMany
   */
  export type DigitalWallUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DigitalWallUsers.
     */
    data: DigitalWallUserCreateManyInput | DigitalWallUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalWallUser createManyAndReturn
   */
  export type DigitalWallUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * The data used to create many DigitalWallUsers.
     */
    data: DigitalWallUserCreateManyInput | DigitalWallUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DigitalWallUser update
   */
  export type DigitalWallUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * The data needed to update a DigitalWallUser.
     */
    data: XOR<DigitalWallUserUpdateInput, DigitalWallUserUncheckedUpdateInput>
    /**
     * Choose, which DigitalWallUser to update.
     */
    where: DigitalWallUserWhereUniqueInput
  }

  /**
   * DigitalWallUser updateMany
   */
  export type DigitalWallUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DigitalWallUsers.
     */
    data: XOR<DigitalWallUserUpdateManyMutationInput, DigitalWallUserUncheckedUpdateManyInput>
    /**
     * Filter which DigitalWallUsers to update
     */
    where?: DigitalWallUserWhereInput
    /**
     * Limit how many DigitalWallUsers to update.
     */
    limit?: number
  }

  /**
   * DigitalWallUser updateManyAndReturn
   */
  export type DigitalWallUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * The data used to update DigitalWallUsers.
     */
    data: XOR<DigitalWallUserUpdateManyMutationInput, DigitalWallUserUncheckedUpdateManyInput>
    /**
     * Filter which DigitalWallUsers to update
     */
    where?: DigitalWallUserWhereInput
    /**
     * Limit how many DigitalWallUsers to update.
     */
    limit?: number
  }

  /**
   * DigitalWallUser upsert
   */
  export type DigitalWallUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * The filter to search for the DigitalWallUser to update in case it exists.
     */
    where: DigitalWallUserWhereUniqueInput
    /**
     * In case the DigitalWallUser found by the `where` argument doesn't exist, create a new DigitalWallUser with this data.
     */
    create: XOR<DigitalWallUserCreateInput, DigitalWallUserUncheckedCreateInput>
    /**
     * In case the DigitalWallUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DigitalWallUserUpdateInput, DigitalWallUserUncheckedUpdateInput>
  }

  /**
   * DigitalWallUser delete
   */
  export type DigitalWallUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
    /**
     * Filter which DigitalWallUser to delete.
     */
    where: DigitalWallUserWhereUniqueInput
  }

  /**
   * DigitalWallUser deleteMany
   */
  export type DigitalWallUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DigitalWallUsers to delete
     */
    where?: DigitalWallUserWhereInput
    /**
     * Limit how many DigitalWallUsers to delete.
     */
    limit?: number
  }

  /**
   * DigitalWallUser without action
   */
  export type DigitalWallUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DigitalWallUser
     */
    select?: DigitalWallUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DigitalWallUser
     */
    omit?: DigitalWallUserOmit<ExtArgs> | null
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


  export const DigitalWallScalarFieldEnum: {
    id: 'id',
    wallId: 'wallId',
    spotlightText: 'spotlightText',
    spotlightImage: 'spotlightImage',
    offers: 'offers',
    createdAt: 'createdAt'
  };

  export type DigitalWallScalarFieldEnum = (typeof DigitalWallScalarFieldEnum)[keyof typeof DigitalWallScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    digitalWallId: 'digitalWallId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    weight: 'weight',
    image: 'image',
    categoryName: 'categoryName',
    digitalWallId: 'digitalWallId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    image: 'image',
    digitalWallId: 'digitalWallId'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const NewArrivalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    weight: 'weight',
    image: 'image',
    digitalWallId: 'digitalWallId'
  };

  export type NewArrivalScalarFieldEnum = (typeof NewArrivalScalarFieldEnum)[keyof typeof NewArrivalScalarFieldEnum]


  export const DigitalWallUserScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    password: 'password',
    wall_slug: 'wall_slug',
    shop_name: 'shop_name'
  };

  export type DigitalWallUserScalarFieldEnum = (typeof DigitalWallUserScalarFieldEnum)[keyof typeof DigitalWallUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DigitalWallWhereInput = {
    AND?: DigitalWallWhereInput | DigitalWallWhereInput[]
    OR?: DigitalWallWhereInput[]
    NOT?: DigitalWallWhereInput | DigitalWallWhereInput[]
    id?: StringFilter<"DigitalWall"> | string
    wallId?: StringFilter<"DigitalWall"> | string
    spotlightText?: StringNullableFilter<"DigitalWall"> | string | null
    spotlightImage?: StringNullableFilter<"DigitalWall"> | string | null
    offers?: JsonFilter<"DigitalWall">
    createdAt?: DateTimeFilter<"DigitalWall"> | Date | string
    categories?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    banners?: BannerListRelationFilter
    newArrivals?: NewArrivalListRelationFilter
  }

  export type DigitalWallOrderByWithRelationInput = {
    id?: SortOrder
    wallId?: SortOrder
    spotlightText?: SortOrderInput | SortOrder
    spotlightImage?: SortOrderInput | SortOrder
    offers?: SortOrder
    createdAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    banners?: BannerOrderByRelationAggregateInput
    newArrivals?: NewArrivalOrderByRelationAggregateInput
  }

  export type DigitalWallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wallId?: string
    AND?: DigitalWallWhereInput | DigitalWallWhereInput[]
    OR?: DigitalWallWhereInput[]
    NOT?: DigitalWallWhereInput | DigitalWallWhereInput[]
    spotlightText?: StringNullableFilter<"DigitalWall"> | string | null
    spotlightImage?: StringNullableFilter<"DigitalWall"> | string | null
    offers?: JsonFilter<"DigitalWall">
    createdAt?: DateTimeFilter<"DigitalWall"> | Date | string
    categories?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    banners?: BannerListRelationFilter
    newArrivals?: NewArrivalListRelationFilter
  }, "id" | "wallId">

  export type DigitalWallOrderByWithAggregationInput = {
    id?: SortOrder
    wallId?: SortOrder
    spotlightText?: SortOrderInput | SortOrder
    spotlightImage?: SortOrderInput | SortOrder
    offers?: SortOrder
    createdAt?: SortOrder
    _count?: DigitalWallCountOrderByAggregateInput
    _max?: DigitalWallMaxOrderByAggregateInput
    _min?: DigitalWallMinOrderByAggregateInput
  }

  export type DigitalWallScalarWhereWithAggregatesInput = {
    AND?: DigitalWallScalarWhereWithAggregatesInput | DigitalWallScalarWhereWithAggregatesInput[]
    OR?: DigitalWallScalarWhereWithAggregatesInput[]
    NOT?: DigitalWallScalarWhereWithAggregatesInput | DigitalWallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DigitalWall"> | string
    wallId?: StringWithAggregatesFilter<"DigitalWall"> | string
    spotlightText?: StringNullableWithAggregatesFilter<"DigitalWall"> | string | null
    spotlightImage?: StringNullableWithAggregatesFilter<"DigitalWall"> | string | null
    offers?: JsonWithAggregatesFilter<"DigitalWall">
    createdAt?: DateTimeWithAggregatesFilter<"DigitalWall"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    digitalWallId?: StringFilter<"Category"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    digitalWallId?: SortOrder
    digitalWall?: DigitalWallOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    digitalWallId?: StringFilter<"Category"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    digitalWallId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    digitalWallId?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    weight?: StringFilter<"Product"> | string
    image?: StringNullableFilter<"Product"> | string | null
    categoryName?: StringFilter<"Product"> | string
    digitalWallId?: StringFilter<"Product"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrderInput | SortOrder
    categoryName?: SortOrder
    digitalWallId?: SortOrder
    digitalWall?: DigitalWallOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    weight?: StringFilter<"Product"> | string
    image?: StringNullableFilter<"Product"> | string | null
    categoryName?: StringFilter<"Product"> | string
    digitalWallId?: StringFilter<"Product"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrderInput | SortOrder
    categoryName?: SortOrder
    digitalWallId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    weight?: StringWithAggregatesFilter<"Product"> | string
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryName?: StringWithAggregatesFilter<"Product"> | string
    digitalWallId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: StringFilter<"Banner"> | string
    text?: StringFilter<"Banner"> | string
    image?: StringNullableFilter<"Banner"> | string | null
    digitalWallId?: StringFilter<"Banner"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrderInput | SortOrder
    digitalWallId?: SortOrder
    digitalWall?: DigitalWallOrderByWithRelationInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    text?: StringFilter<"Banner"> | string
    image?: StringNullableFilter<"Banner"> | string | null
    digitalWallId?: StringFilter<"Banner"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrderInput | SortOrder
    digitalWallId?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banner"> | string
    text?: StringWithAggregatesFilter<"Banner"> | string
    image?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    digitalWallId?: StringWithAggregatesFilter<"Banner"> | string
  }

  export type NewArrivalWhereInput = {
    AND?: NewArrivalWhereInput | NewArrivalWhereInput[]
    OR?: NewArrivalWhereInput[]
    NOT?: NewArrivalWhereInput | NewArrivalWhereInput[]
    id?: StringFilter<"NewArrival"> | string
    title?: StringFilter<"NewArrival"> | string
    weight?: StringFilter<"NewArrival"> | string
    image?: StringNullableFilter<"NewArrival"> | string | null
    digitalWallId?: StringFilter<"NewArrival"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }

  export type NewArrivalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrderInput | SortOrder
    digitalWallId?: SortOrder
    digitalWall?: DigitalWallOrderByWithRelationInput
  }

  export type NewArrivalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewArrivalWhereInput | NewArrivalWhereInput[]
    OR?: NewArrivalWhereInput[]
    NOT?: NewArrivalWhereInput | NewArrivalWhereInput[]
    title?: StringFilter<"NewArrival"> | string
    weight?: StringFilter<"NewArrival"> | string
    image?: StringNullableFilter<"NewArrival"> | string | null
    digitalWallId?: StringFilter<"NewArrival"> | string
    digitalWall?: XOR<DigitalWallScalarRelationFilter, DigitalWallWhereInput>
  }, "id">

  export type NewArrivalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrderInput | SortOrder
    digitalWallId?: SortOrder
    _count?: NewArrivalCountOrderByAggregateInput
    _max?: NewArrivalMaxOrderByAggregateInput
    _min?: NewArrivalMinOrderByAggregateInput
  }

  export type NewArrivalScalarWhereWithAggregatesInput = {
    AND?: NewArrivalScalarWhereWithAggregatesInput | NewArrivalScalarWhereWithAggregatesInput[]
    OR?: NewArrivalScalarWhereWithAggregatesInput[]
    NOT?: NewArrivalScalarWhereWithAggregatesInput | NewArrivalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewArrival"> | string
    title?: StringWithAggregatesFilter<"NewArrival"> | string
    weight?: StringWithAggregatesFilter<"NewArrival"> | string
    image?: StringNullableWithAggregatesFilter<"NewArrival"> | string | null
    digitalWallId?: StringWithAggregatesFilter<"NewArrival"> | string
  }

  export type DigitalWallUserWhereInput = {
    AND?: DigitalWallUserWhereInput | DigitalWallUserWhereInput[]
    OR?: DigitalWallUserWhereInput[]
    NOT?: DigitalWallUserWhereInput | DigitalWallUserWhereInput[]
    userId?: IntFilter<"DigitalWallUser"> | number
    email?: StringFilter<"DigitalWallUser"> | string
    password?: StringFilter<"DigitalWallUser"> | string
    wall_slug?: StringFilter<"DigitalWallUser"> | string
    shop_name?: StringFilter<"DigitalWallUser"> | string
  }

  export type DigitalWallUserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    wall_slug?: SortOrder
    shop_name?: SortOrder
  }

  export type DigitalWallUserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: DigitalWallUserWhereInput | DigitalWallUserWhereInput[]
    OR?: DigitalWallUserWhereInput[]
    NOT?: DigitalWallUserWhereInput | DigitalWallUserWhereInput[]
    email?: StringFilter<"DigitalWallUser"> | string
    password?: StringFilter<"DigitalWallUser"> | string
    wall_slug?: StringFilter<"DigitalWallUser"> | string
    shop_name?: StringFilter<"DigitalWallUser"> | string
  }, "userId">

  export type DigitalWallUserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    wall_slug?: SortOrder
    shop_name?: SortOrder
    _count?: DigitalWallUserCountOrderByAggregateInput
    _avg?: DigitalWallUserAvgOrderByAggregateInput
    _max?: DigitalWallUserMaxOrderByAggregateInput
    _min?: DigitalWallUserMinOrderByAggregateInput
    _sum?: DigitalWallUserSumOrderByAggregateInput
  }

  export type DigitalWallUserScalarWhereWithAggregatesInput = {
    AND?: DigitalWallUserScalarWhereWithAggregatesInput | DigitalWallUserScalarWhereWithAggregatesInput[]
    OR?: DigitalWallUserScalarWhereWithAggregatesInput[]
    NOT?: DigitalWallUserScalarWhereWithAggregatesInput | DigitalWallUserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"DigitalWallUser"> | number
    email?: StringWithAggregatesFilter<"DigitalWallUser"> | string
    password?: StringWithAggregatesFilter<"DigitalWallUser"> | string
    wall_slug?: StringWithAggregatesFilter<"DigitalWallUser"> | string
    shop_name?: StringWithAggregatesFilter<"DigitalWallUser"> | string
  }

  export type DigitalWallCreateInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutDigitalWallInput
    products?: ProductCreateNestedManyWithoutDigitalWallInput
    banners?: BannerCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallUncheckedCreateInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutDigitalWallInput
    products?: ProductUncheckedCreateNestedManyWithoutDigitalWallInput
    banners?: BannerUncheckedCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalUncheckedCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutDigitalWallNestedInput
    products?: ProductUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutDigitalWallNestedInput
    products?: ProductUncheckedUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUncheckedUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUncheckedUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallCreateManyInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DigitalWallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DigitalWallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    digitalWall: DigitalWallCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    digitalWallId: string
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    digitalWall?: DigitalWallUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    digitalWallId: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    categoryName: string
    digitalWall: DigitalWallCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    categoryName: string
    digitalWallId: string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: StringFieldUpdateOperationsInput | string
    digitalWall?: DigitalWallUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: StringFieldUpdateOperationsInput | string
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    categoryName: string
    digitalWallId: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: StringFieldUpdateOperationsInput | string
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type BannerCreateInput = {
    id?: string
    text: string
    image?: string | null
    digitalWall: DigitalWallCreateNestedOneWithoutBannersInput
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    text: string
    image?: string | null
    digitalWallId: string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    digitalWall?: DigitalWallUpdateOneRequiredWithoutBannersNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type BannerCreateManyInput = {
    id?: string
    text: string
    image?: string | null
    digitalWallId: string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type NewArrivalCreateInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    digitalWall: DigitalWallCreateNestedOneWithoutNewArrivalsInput
  }

  export type NewArrivalUncheckedCreateInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    digitalWallId: string
  }

  export type NewArrivalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    digitalWall?: DigitalWallUpdateOneRequiredWithoutNewArrivalsNestedInput
  }

  export type NewArrivalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type NewArrivalCreateManyInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    digitalWallId: string
  }

  export type NewArrivalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewArrivalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    digitalWallId?: StringFieldUpdateOperationsInput | string
  }

  export type DigitalWallUserCreateInput = {
    email: string
    password: string
    wall_slug: string
    shop_name: string
  }

  export type DigitalWallUserUncheckedCreateInput = {
    userId?: number
    email: string
    password: string
    wall_slug: string
    shop_name: string
  }

  export type DigitalWallUserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    wall_slug?: StringFieldUpdateOperationsInput | string
    shop_name?: StringFieldUpdateOperationsInput | string
  }

  export type DigitalWallUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    wall_slug?: StringFieldUpdateOperationsInput | string
    shop_name?: StringFieldUpdateOperationsInput | string
  }

  export type DigitalWallUserCreateManyInput = {
    userId?: number
    email: string
    password: string
    wall_slug: string
    shop_name: string
  }

  export type DigitalWallUserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    wall_slug?: StringFieldUpdateOperationsInput | string
    shop_name?: StringFieldUpdateOperationsInput | string
  }

  export type DigitalWallUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    wall_slug?: StringFieldUpdateOperationsInput | string
    shop_name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type BannerListRelationFilter = {
    every?: BannerWhereInput
    some?: BannerWhereInput
    none?: BannerWhereInput
  }

  export type NewArrivalListRelationFilter = {
    every?: NewArrivalWhereInput
    some?: NewArrivalWhereInput
    none?: NewArrivalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewArrivalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DigitalWallCountOrderByAggregateInput = {
    id?: SortOrder
    wallId?: SortOrder
    spotlightText?: SortOrder
    spotlightImage?: SortOrder
    offers?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalWallMaxOrderByAggregateInput = {
    id?: SortOrder
    wallId?: SortOrder
    spotlightText?: SortOrder
    spotlightImage?: SortOrder
    createdAt?: SortOrder
  }

  export type DigitalWallMinOrderByAggregateInput = {
    id?: SortOrder
    wallId?: SortOrder
    spotlightText?: SortOrder
    spotlightImage?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DigitalWallScalarRelationFilter = {
    is?: DigitalWallWhereInput
    isNot?: DigitalWallWhereInput
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    digitalWallId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    digitalWallId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    digitalWallId?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrder
    categoryName?: SortOrder
    digitalWallId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrder
    categoryName?: SortOrder
    digitalWallId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrder
    categoryName?: SortOrder
    digitalWallId?: SortOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrder
    digitalWallId?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrder
    digitalWallId?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    image?: SortOrder
    digitalWallId?: SortOrder
  }

  export type NewArrivalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrder
    digitalWallId?: SortOrder
  }

  export type NewArrivalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrder
    digitalWallId?: SortOrder
  }

  export type NewArrivalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    weight?: SortOrder
    image?: SortOrder
    digitalWallId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DigitalWallUserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    wall_slug?: SortOrder
    shop_name?: SortOrder
  }

  export type DigitalWallUserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DigitalWallUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    wall_slug?: SortOrder
    shop_name?: SortOrder
  }

  export type DigitalWallUserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    wall_slug?: SortOrder
    shop_name?: SortOrder
  }

  export type DigitalWallUserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type CategoryCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<CategoryCreateWithoutDigitalWallInput, CategoryUncheckedCreateWithoutDigitalWallInput> | CategoryCreateWithoutDigitalWallInput[] | CategoryUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDigitalWallInput | CategoryCreateOrConnectWithoutDigitalWallInput[]
    createMany?: CategoryCreateManyDigitalWallInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<ProductCreateWithoutDigitalWallInput, ProductUncheckedCreateWithoutDigitalWallInput> | ProductCreateWithoutDigitalWallInput[] | ProductUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDigitalWallInput | ProductCreateOrConnectWithoutDigitalWallInput[]
    createMany?: ProductCreateManyDigitalWallInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BannerCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<BannerCreateWithoutDigitalWallInput, BannerUncheckedCreateWithoutDigitalWallInput> | BannerCreateWithoutDigitalWallInput[] | BannerUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutDigitalWallInput | BannerCreateOrConnectWithoutDigitalWallInput[]
    createMany?: BannerCreateManyDigitalWallInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type NewArrivalCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<NewArrivalCreateWithoutDigitalWallInput, NewArrivalUncheckedCreateWithoutDigitalWallInput> | NewArrivalCreateWithoutDigitalWallInput[] | NewArrivalUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: NewArrivalCreateOrConnectWithoutDigitalWallInput | NewArrivalCreateOrConnectWithoutDigitalWallInput[]
    createMany?: NewArrivalCreateManyDigitalWallInputEnvelope
    connect?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<CategoryCreateWithoutDigitalWallInput, CategoryUncheckedCreateWithoutDigitalWallInput> | CategoryCreateWithoutDigitalWallInput[] | CategoryUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDigitalWallInput | CategoryCreateOrConnectWithoutDigitalWallInput[]
    createMany?: CategoryCreateManyDigitalWallInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<ProductCreateWithoutDigitalWallInput, ProductUncheckedCreateWithoutDigitalWallInput> | ProductCreateWithoutDigitalWallInput[] | ProductUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDigitalWallInput | ProductCreateOrConnectWithoutDigitalWallInput[]
    createMany?: ProductCreateManyDigitalWallInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BannerUncheckedCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<BannerCreateWithoutDigitalWallInput, BannerUncheckedCreateWithoutDigitalWallInput> | BannerCreateWithoutDigitalWallInput[] | BannerUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutDigitalWallInput | BannerCreateOrConnectWithoutDigitalWallInput[]
    createMany?: BannerCreateManyDigitalWallInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type NewArrivalUncheckedCreateNestedManyWithoutDigitalWallInput = {
    create?: XOR<NewArrivalCreateWithoutDigitalWallInput, NewArrivalUncheckedCreateWithoutDigitalWallInput> | NewArrivalCreateWithoutDigitalWallInput[] | NewArrivalUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: NewArrivalCreateOrConnectWithoutDigitalWallInput | NewArrivalCreateOrConnectWithoutDigitalWallInput[]
    createMany?: NewArrivalCreateManyDigitalWallInputEnvelope
    connect?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<CategoryCreateWithoutDigitalWallInput, CategoryUncheckedCreateWithoutDigitalWallInput> | CategoryCreateWithoutDigitalWallInput[] | CategoryUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDigitalWallInput | CategoryCreateOrConnectWithoutDigitalWallInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutDigitalWallInput | CategoryUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: CategoryCreateManyDigitalWallInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutDigitalWallInput | CategoryUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutDigitalWallInput | CategoryUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<ProductCreateWithoutDigitalWallInput, ProductUncheckedCreateWithoutDigitalWallInput> | ProductCreateWithoutDigitalWallInput[] | ProductUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDigitalWallInput | ProductCreateOrConnectWithoutDigitalWallInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutDigitalWallInput | ProductUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: ProductCreateManyDigitalWallInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutDigitalWallInput | ProductUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutDigitalWallInput | ProductUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BannerUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<BannerCreateWithoutDigitalWallInput, BannerUncheckedCreateWithoutDigitalWallInput> | BannerCreateWithoutDigitalWallInput[] | BannerUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutDigitalWallInput | BannerCreateOrConnectWithoutDigitalWallInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutDigitalWallInput | BannerUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: BannerCreateManyDigitalWallInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutDigitalWallInput | BannerUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutDigitalWallInput | BannerUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type NewArrivalUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<NewArrivalCreateWithoutDigitalWallInput, NewArrivalUncheckedCreateWithoutDigitalWallInput> | NewArrivalCreateWithoutDigitalWallInput[] | NewArrivalUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: NewArrivalCreateOrConnectWithoutDigitalWallInput | NewArrivalCreateOrConnectWithoutDigitalWallInput[]
    upsert?: NewArrivalUpsertWithWhereUniqueWithoutDigitalWallInput | NewArrivalUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: NewArrivalCreateManyDigitalWallInputEnvelope
    set?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    disconnect?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    delete?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    connect?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    update?: NewArrivalUpdateWithWhereUniqueWithoutDigitalWallInput | NewArrivalUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: NewArrivalUpdateManyWithWhereWithoutDigitalWallInput | NewArrivalUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: NewArrivalScalarWhereInput | NewArrivalScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<CategoryCreateWithoutDigitalWallInput, CategoryUncheckedCreateWithoutDigitalWallInput> | CategoryCreateWithoutDigitalWallInput[] | CategoryUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutDigitalWallInput | CategoryCreateOrConnectWithoutDigitalWallInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutDigitalWallInput | CategoryUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: CategoryCreateManyDigitalWallInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutDigitalWallInput | CategoryUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutDigitalWallInput | CategoryUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<ProductCreateWithoutDigitalWallInput, ProductUncheckedCreateWithoutDigitalWallInput> | ProductCreateWithoutDigitalWallInput[] | ProductUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDigitalWallInput | ProductCreateOrConnectWithoutDigitalWallInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutDigitalWallInput | ProductUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: ProductCreateManyDigitalWallInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutDigitalWallInput | ProductUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutDigitalWallInput | ProductUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BannerUncheckedUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<BannerCreateWithoutDigitalWallInput, BannerUncheckedCreateWithoutDigitalWallInput> | BannerCreateWithoutDigitalWallInput[] | BannerUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutDigitalWallInput | BannerCreateOrConnectWithoutDigitalWallInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutDigitalWallInput | BannerUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: BannerCreateManyDigitalWallInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutDigitalWallInput | BannerUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutDigitalWallInput | BannerUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type NewArrivalUncheckedUpdateManyWithoutDigitalWallNestedInput = {
    create?: XOR<NewArrivalCreateWithoutDigitalWallInput, NewArrivalUncheckedCreateWithoutDigitalWallInput> | NewArrivalCreateWithoutDigitalWallInput[] | NewArrivalUncheckedCreateWithoutDigitalWallInput[]
    connectOrCreate?: NewArrivalCreateOrConnectWithoutDigitalWallInput | NewArrivalCreateOrConnectWithoutDigitalWallInput[]
    upsert?: NewArrivalUpsertWithWhereUniqueWithoutDigitalWallInput | NewArrivalUpsertWithWhereUniqueWithoutDigitalWallInput[]
    createMany?: NewArrivalCreateManyDigitalWallInputEnvelope
    set?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    disconnect?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    delete?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    connect?: NewArrivalWhereUniqueInput | NewArrivalWhereUniqueInput[]
    update?: NewArrivalUpdateWithWhereUniqueWithoutDigitalWallInput | NewArrivalUpdateWithWhereUniqueWithoutDigitalWallInput[]
    updateMany?: NewArrivalUpdateManyWithWhereWithoutDigitalWallInput | NewArrivalUpdateManyWithWhereWithoutDigitalWallInput[]
    deleteMany?: NewArrivalScalarWhereInput | NewArrivalScalarWhereInput[]
  }

  export type DigitalWallCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<DigitalWallCreateWithoutCategoriesInput, DigitalWallUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutCategoriesInput
    connect?: DigitalWallWhereUniqueInput
  }

  export type DigitalWallUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<DigitalWallCreateWithoutCategoriesInput, DigitalWallUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutCategoriesInput
    upsert?: DigitalWallUpsertWithoutCategoriesInput
    connect?: DigitalWallWhereUniqueInput
    update?: XOR<XOR<DigitalWallUpdateToOneWithWhereWithoutCategoriesInput, DigitalWallUpdateWithoutCategoriesInput>, DigitalWallUncheckedUpdateWithoutCategoriesInput>
  }

  export type DigitalWallCreateNestedOneWithoutProductsInput = {
    create?: XOR<DigitalWallCreateWithoutProductsInput, DigitalWallUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutProductsInput
    connect?: DigitalWallWhereUniqueInput
  }

  export type DigitalWallUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<DigitalWallCreateWithoutProductsInput, DigitalWallUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutProductsInput
    upsert?: DigitalWallUpsertWithoutProductsInput
    connect?: DigitalWallWhereUniqueInput
    update?: XOR<XOR<DigitalWallUpdateToOneWithWhereWithoutProductsInput, DigitalWallUpdateWithoutProductsInput>, DigitalWallUncheckedUpdateWithoutProductsInput>
  }

  export type DigitalWallCreateNestedOneWithoutBannersInput = {
    create?: XOR<DigitalWallCreateWithoutBannersInput, DigitalWallUncheckedCreateWithoutBannersInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutBannersInput
    connect?: DigitalWallWhereUniqueInput
  }

  export type DigitalWallUpdateOneRequiredWithoutBannersNestedInput = {
    create?: XOR<DigitalWallCreateWithoutBannersInput, DigitalWallUncheckedCreateWithoutBannersInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutBannersInput
    upsert?: DigitalWallUpsertWithoutBannersInput
    connect?: DigitalWallWhereUniqueInput
    update?: XOR<XOR<DigitalWallUpdateToOneWithWhereWithoutBannersInput, DigitalWallUpdateWithoutBannersInput>, DigitalWallUncheckedUpdateWithoutBannersInput>
  }

  export type DigitalWallCreateNestedOneWithoutNewArrivalsInput = {
    create?: XOR<DigitalWallCreateWithoutNewArrivalsInput, DigitalWallUncheckedCreateWithoutNewArrivalsInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutNewArrivalsInput
    connect?: DigitalWallWhereUniqueInput
  }

  export type DigitalWallUpdateOneRequiredWithoutNewArrivalsNestedInput = {
    create?: XOR<DigitalWallCreateWithoutNewArrivalsInput, DigitalWallUncheckedCreateWithoutNewArrivalsInput>
    connectOrCreate?: DigitalWallCreateOrConnectWithoutNewArrivalsInput
    upsert?: DigitalWallUpsertWithoutNewArrivalsInput
    connect?: DigitalWallWhereUniqueInput
    update?: XOR<XOR<DigitalWallUpdateToOneWithWhereWithoutNewArrivalsInput, DigitalWallUpdateWithoutNewArrivalsInput>, DigitalWallUncheckedUpdateWithoutNewArrivalsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryCreateWithoutDigitalWallInput = {
    id?: string
    name: string
  }

  export type CategoryUncheckedCreateWithoutDigitalWallInput = {
    id?: string
    name: string
  }

  export type CategoryCreateOrConnectWithoutDigitalWallInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDigitalWallInput, CategoryUncheckedCreateWithoutDigitalWallInput>
  }

  export type CategoryCreateManyDigitalWallInputEnvelope = {
    data: CategoryCreateManyDigitalWallInput | CategoryCreateManyDigitalWallInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutDigitalWallInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    categoryName: string
  }

  export type ProductUncheckedCreateWithoutDigitalWallInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    categoryName: string
  }

  export type ProductCreateOrConnectWithoutDigitalWallInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDigitalWallInput, ProductUncheckedCreateWithoutDigitalWallInput>
  }

  export type ProductCreateManyDigitalWallInputEnvelope = {
    data: ProductCreateManyDigitalWallInput | ProductCreateManyDigitalWallInput[]
    skipDuplicates?: boolean
  }

  export type BannerCreateWithoutDigitalWallInput = {
    id?: string
    text: string
    image?: string | null
  }

  export type BannerUncheckedCreateWithoutDigitalWallInput = {
    id?: string
    text: string
    image?: string | null
  }

  export type BannerCreateOrConnectWithoutDigitalWallInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutDigitalWallInput, BannerUncheckedCreateWithoutDigitalWallInput>
  }

  export type BannerCreateManyDigitalWallInputEnvelope = {
    data: BannerCreateManyDigitalWallInput | BannerCreateManyDigitalWallInput[]
    skipDuplicates?: boolean
  }

  export type NewArrivalCreateWithoutDigitalWallInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
  }

  export type NewArrivalUncheckedCreateWithoutDigitalWallInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
  }

  export type NewArrivalCreateOrConnectWithoutDigitalWallInput = {
    where: NewArrivalWhereUniqueInput
    create: XOR<NewArrivalCreateWithoutDigitalWallInput, NewArrivalUncheckedCreateWithoutDigitalWallInput>
  }

  export type NewArrivalCreateManyDigitalWallInputEnvelope = {
    data: NewArrivalCreateManyDigitalWallInput | NewArrivalCreateManyDigitalWallInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutDigitalWallInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutDigitalWallInput, CategoryUncheckedUpdateWithoutDigitalWallInput>
    create: XOR<CategoryCreateWithoutDigitalWallInput, CategoryUncheckedCreateWithoutDigitalWallInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutDigitalWallInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutDigitalWallInput, CategoryUncheckedUpdateWithoutDigitalWallInput>
  }

  export type CategoryUpdateManyWithWhereWithoutDigitalWallInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutDigitalWallInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    digitalWallId?: StringFilter<"Category"> | string
  }

  export type ProductUpsertWithWhereUniqueWithoutDigitalWallInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutDigitalWallInput, ProductUncheckedUpdateWithoutDigitalWallInput>
    create: XOR<ProductCreateWithoutDigitalWallInput, ProductUncheckedCreateWithoutDigitalWallInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutDigitalWallInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutDigitalWallInput, ProductUncheckedUpdateWithoutDigitalWallInput>
  }

  export type ProductUpdateManyWithWhereWithoutDigitalWallInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutDigitalWallInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    weight?: StringFilter<"Product"> | string
    image?: StringNullableFilter<"Product"> | string | null
    categoryName?: StringFilter<"Product"> | string
    digitalWallId?: StringFilter<"Product"> | string
  }

  export type BannerUpsertWithWhereUniqueWithoutDigitalWallInput = {
    where: BannerWhereUniqueInput
    update: XOR<BannerUpdateWithoutDigitalWallInput, BannerUncheckedUpdateWithoutDigitalWallInput>
    create: XOR<BannerCreateWithoutDigitalWallInput, BannerUncheckedCreateWithoutDigitalWallInput>
  }

  export type BannerUpdateWithWhereUniqueWithoutDigitalWallInput = {
    where: BannerWhereUniqueInput
    data: XOR<BannerUpdateWithoutDigitalWallInput, BannerUncheckedUpdateWithoutDigitalWallInput>
  }

  export type BannerUpdateManyWithWhereWithoutDigitalWallInput = {
    where: BannerScalarWhereInput
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyWithoutDigitalWallInput>
  }

  export type BannerScalarWhereInput = {
    AND?: BannerScalarWhereInput | BannerScalarWhereInput[]
    OR?: BannerScalarWhereInput[]
    NOT?: BannerScalarWhereInput | BannerScalarWhereInput[]
    id?: StringFilter<"Banner"> | string
    text?: StringFilter<"Banner"> | string
    image?: StringNullableFilter<"Banner"> | string | null
    digitalWallId?: StringFilter<"Banner"> | string
  }

  export type NewArrivalUpsertWithWhereUniqueWithoutDigitalWallInput = {
    where: NewArrivalWhereUniqueInput
    update: XOR<NewArrivalUpdateWithoutDigitalWallInput, NewArrivalUncheckedUpdateWithoutDigitalWallInput>
    create: XOR<NewArrivalCreateWithoutDigitalWallInput, NewArrivalUncheckedCreateWithoutDigitalWallInput>
  }

  export type NewArrivalUpdateWithWhereUniqueWithoutDigitalWallInput = {
    where: NewArrivalWhereUniqueInput
    data: XOR<NewArrivalUpdateWithoutDigitalWallInput, NewArrivalUncheckedUpdateWithoutDigitalWallInput>
  }

  export type NewArrivalUpdateManyWithWhereWithoutDigitalWallInput = {
    where: NewArrivalScalarWhereInput
    data: XOR<NewArrivalUpdateManyMutationInput, NewArrivalUncheckedUpdateManyWithoutDigitalWallInput>
  }

  export type NewArrivalScalarWhereInput = {
    AND?: NewArrivalScalarWhereInput | NewArrivalScalarWhereInput[]
    OR?: NewArrivalScalarWhereInput[]
    NOT?: NewArrivalScalarWhereInput | NewArrivalScalarWhereInput[]
    id?: StringFilter<"NewArrival"> | string
    title?: StringFilter<"NewArrival"> | string
    weight?: StringFilter<"NewArrival"> | string
    image?: StringNullableFilter<"NewArrival"> | string | null
    digitalWallId?: StringFilter<"NewArrival"> | string
  }

  export type DigitalWallCreateWithoutCategoriesInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutDigitalWallInput
    banners?: BannerCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallUncheckedCreateWithoutCategoriesInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutDigitalWallInput
    banners?: BannerUncheckedCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalUncheckedCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallCreateOrConnectWithoutCategoriesInput = {
    where: DigitalWallWhereUniqueInput
    create: XOR<DigitalWallCreateWithoutCategoriesInput, DigitalWallUncheckedCreateWithoutCategoriesInput>
  }

  export type DigitalWallUpsertWithoutCategoriesInput = {
    update: XOR<DigitalWallUpdateWithoutCategoriesInput, DigitalWallUncheckedUpdateWithoutCategoriesInput>
    create: XOR<DigitalWallCreateWithoutCategoriesInput, DigitalWallUncheckedCreateWithoutCategoriesInput>
    where?: DigitalWallWhereInput
  }

  export type DigitalWallUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: DigitalWallWhereInput
    data: XOR<DigitalWallUpdateWithoutCategoriesInput, DigitalWallUncheckedUpdateWithoutCategoriesInput>
  }

  export type DigitalWallUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUncheckedUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUncheckedUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallCreateWithoutProductsInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutDigitalWallInput
    banners?: BannerCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallUncheckedCreateWithoutProductsInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutDigitalWallInput
    banners?: BannerUncheckedCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalUncheckedCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallCreateOrConnectWithoutProductsInput = {
    where: DigitalWallWhereUniqueInput
    create: XOR<DigitalWallCreateWithoutProductsInput, DigitalWallUncheckedCreateWithoutProductsInput>
  }

  export type DigitalWallUpsertWithoutProductsInput = {
    update: XOR<DigitalWallUpdateWithoutProductsInput, DigitalWallUncheckedUpdateWithoutProductsInput>
    create: XOR<DigitalWallCreateWithoutProductsInput, DigitalWallUncheckedCreateWithoutProductsInput>
    where?: DigitalWallWhereInput
  }

  export type DigitalWallUpdateToOneWithWhereWithoutProductsInput = {
    where?: DigitalWallWhereInput
    data: XOR<DigitalWallUpdateWithoutProductsInput, DigitalWallUncheckedUpdateWithoutProductsInput>
  }

  export type DigitalWallUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUncheckedUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUncheckedUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallCreateWithoutBannersInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutDigitalWallInput
    products?: ProductCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallUncheckedCreateWithoutBannersInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutDigitalWallInput
    products?: ProductUncheckedCreateNestedManyWithoutDigitalWallInput
    newArrivals?: NewArrivalUncheckedCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallCreateOrConnectWithoutBannersInput = {
    where: DigitalWallWhereUniqueInput
    create: XOR<DigitalWallCreateWithoutBannersInput, DigitalWallUncheckedCreateWithoutBannersInput>
  }

  export type DigitalWallUpsertWithoutBannersInput = {
    update: XOR<DigitalWallUpdateWithoutBannersInput, DigitalWallUncheckedUpdateWithoutBannersInput>
    create: XOR<DigitalWallCreateWithoutBannersInput, DigitalWallUncheckedCreateWithoutBannersInput>
    where?: DigitalWallWhereInput
  }

  export type DigitalWallUpdateToOneWithWhereWithoutBannersInput = {
    where?: DigitalWallWhereInput
    data: XOR<DigitalWallUpdateWithoutBannersInput, DigitalWallUncheckedUpdateWithoutBannersInput>
  }

  export type DigitalWallUpdateWithoutBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutDigitalWallNestedInput
    products?: ProductUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallUncheckedUpdateWithoutBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutDigitalWallNestedInput
    products?: ProductUncheckedUpdateManyWithoutDigitalWallNestedInput
    newArrivals?: NewArrivalUncheckedUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallCreateWithoutNewArrivalsInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutDigitalWallInput
    products?: ProductCreateNestedManyWithoutDigitalWallInput
    banners?: BannerCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallUncheckedCreateWithoutNewArrivalsInput = {
    id?: string
    wallId: string
    spotlightText?: string | null
    spotlightImage?: string | null
    offers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutDigitalWallInput
    products?: ProductUncheckedCreateNestedManyWithoutDigitalWallInput
    banners?: BannerUncheckedCreateNestedManyWithoutDigitalWallInput
  }

  export type DigitalWallCreateOrConnectWithoutNewArrivalsInput = {
    where: DigitalWallWhereUniqueInput
    create: XOR<DigitalWallCreateWithoutNewArrivalsInput, DigitalWallUncheckedCreateWithoutNewArrivalsInput>
  }

  export type DigitalWallUpsertWithoutNewArrivalsInput = {
    update: XOR<DigitalWallUpdateWithoutNewArrivalsInput, DigitalWallUncheckedUpdateWithoutNewArrivalsInput>
    create: XOR<DigitalWallCreateWithoutNewArrivalsInput, DigitalWallUncheckedCreateWithoutNewArrivalsInput>
    where?: DigitalWallWhereInput
  }

  export type DigitalWallUpdateToOneWithWhereWithoutNewArrivalsInput = {
    where?: DigitalWallWhereInput
    data: XOR<DigitalWallUpdateWithoutNewArrivalsInput, DigitalWallUncheckedUpdateWithoutNewArrivalsInput>
  }

  export type DigitalWallUpdateWithoutNewArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutDigitalWallNestedInput
    products?: ProductUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUpdateManyWithoutDigitalWallNestedInput
  }

  export type DigitalWallUncheckedUpdateWithoutNewArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallId?: StringFieldUpdateOperationsInput | string
    spotlightText?: NullableStringFieldUpdateOperationsInput | string | null
    spotlightImage?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutDigitalWallNestedInput
    products?: ProductUncheckedUpdateManyWithoutDigitalWallNestedInput
    banners?: BannerUncheckedUpdateManyWithoutDigitalWallNestedInput
  }

  export type CategoryCreateManyDigitalWallInput = {
    id?: string
    name: string
  }

  export type ProductCreateManyDigitalWallInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
    categoryName: string
  }

  export type BannerCreateManyDigitalWallInput = {
    id?: string
    text: string
    image?: string | null
  }

  export type NewArrivalCreateManyDigitalWallInput = {
    id?: string
    title: string
    weight: string
    image?: string | null
  }

  export type CategoryUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type BannerUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateManyWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewArrivalUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewArrivalUncheckedUpdateWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewArrivalUncheckedUpdateManyWithoutDigitalWallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
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