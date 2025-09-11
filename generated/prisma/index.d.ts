
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
 * Model test_table
 * 
 */
export type test_table = $Result.DefaultSelection<Prisma.$test_tablePayload>
/**
 * Model another_table
 * 
 */
export type another_table = $Result.DefaultSelection<Prisma.$another_tablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Test_tables
 * const test_tables = await prisma.test_table.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Test_tables
   * const test_tables = await prisma.test_table.findMany()
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
   * `prisma.test_table`: Exposes CRUD operations for the **test_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_tables
    * const test_tables = await prisma.test_table.findMany()
    * ```
    */
  get test_table(): Prisma.test_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.another_table`: Exposes CRUD operations for the **another_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Another_tables
    * const another_tables = await prisma.another_table.findMany()
    * ```
    */
  get another_table(): Prisma.another_tableDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    test_table: 'test_table',
    another_table: 'another_table'
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
      modelProps: "test_table" | "another_table"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      test_table: {
        payload: Prisma.$test_tablePayload<ExtArgs>
        fields: Prisma.test_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.test_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.test_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          findFirst: {
            args: Prisma.test_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.test_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          findMany: {
            args: Prisma.test_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>[]
          }
          create: {
            args: Prisma.test_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          createMany: {
            args: Prisma.test_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.test_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>[]
          }
          delete: {
            args: Prisma.test_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          update: {
            args: Prisma.test_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          deleteMany: {
            args: Prisma.test_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.test_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.test_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>[]
          }
          upsert: {
            args: Prisma.test_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$test_tablePayload>
          }
          aggregate: {
            args: Prisma.Test_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest_table>
          }
          groupBy: {
            args: Prisma.test_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Test_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.test_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Test_tableCountAggregateOutputType> | number
          }
        }
      }
      another_table: {
        payload: Prisma.$another_tablePayload<ExtArgs>
        fields: Prisma.another_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.another_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.another_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>
          }
          findFirst: {
            args: Prisma.another_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.another_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>
          }
          findMany: {
            args: Prisma.another_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>[]
          }
          create: {
            args: Prisma.another_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>
          }
          createMany: {
            args: Prisma.another_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.another_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>[]
          }
          delete: {
            args: Prisma.another_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>
          }
          update: {
            args: Prisma.another_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>
          }
          deleteMany: {
            args: Prisma.another_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.another_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.another_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>[]
          }
          upsert: {
            args: Prisma.another_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$another_tablePayload>
          }
          aggregate: {
            args: Prisma.Another_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnother_table>
          }
          groupBy: {
            args: Prisma.another_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Another_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.another_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Another_tableCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    test_table?: test_tableOmit
    another_table?: another_tableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type Test_tableCountOutputType
   */

  export type Test_tableCountOutputType = {
    another_table: number
  }

  export type Test_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    another_table?: boolean | Test_tableCountOutputTypeCountAnother_tableArgs
  }

  // Custom InputTypes
  /**
   * Test_tableCountOutputType without action
   */
  export type Test_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_tableCountOutputType
     */
    select?: Test_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Test_tableCountOutputType without action
   */
  export type Test_tableCountOutputTypeCountAnother_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: another_tableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model test_table
   */

  export type AggregateTest_table = {
    _count: Test_tableCountAggregateOutputType | null
    _avg: Test_tableAvgAggregateOutputType | null
    _sum: Test_tableSumAggregateOutputType | null
    _min: Test_tableMinAggregateOutputType | null
    _max: Test_tableMaxAggregateOutputType | null
  }

  export type Test_tableAvgAggregateOutputType = {
    id: number | null
  }

  export type Test_tableSumAggregateOutputType = {
    id: number | null
  }

  export type Test_tableMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type Test_tableMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type Test_tableCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type Test_tableAvgAggregateInputType = {
    id?: true
  }

  export type Test_tableSumAggregateInputType = {
    id?: true
  }

  export type Test_tableMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type Test_tableMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type Test_tableCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type Test_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_table to aggregate.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test_tables
    **/
    _count?: true | Test_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_tableMaxAggregateInputType
  }

  export type GetTest_tableAggregateType<T extends Test_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateTest_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_table[P]>
      : GetScalarType<T[P], AggregateTest_table[P]>
  }




  export type test_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test_tableWhereInput
    orderBy?: test_tableOrderByWithAggregationInput | test_tableOrderByWithAggregationInput[]
    by: Test_tableScalarFieldEnum[] | Test_tableScalarFieldEnum
    having?: test_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_tableCountAggregateInputType | true
    _avg?: Test_tableAvgAggregateInputType
    _sum?: Test_tableSumAggregateInputType
    _min?: Test_tableMinAggregateInputType
    _max?: Test_tableMaxAggregateInputType
  }

  export type Test_tableGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: Test_tableCountAggregateOutputType | null
    _avg: Test_tableAvgAggregateOutputType | null
    _sum: Test_tableSumAggregateOutputType | null
    _min: Test_tableMinAggregateOutputType | null
    _max: Test_tableMaxAggregateOutputType | null
  }

  type GetTest_tableGroupByPayload<T extends test_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Test_tableGroupByOutputType[P]>
        }
      >
    >


  export type test_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    another_table?: boolean | test_table$another_tableArgs<ExtArgs>
    _count?: boolean | Test_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_table"]>

  export type test_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["test_table"]>

  export type test_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["test_table"]>

  export type test_tableSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type test_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["test_table"]>
  export type test_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    another_table?: boolean | test_table$another_tableArgs<ExtArgs>
    _count?: boolean | Test_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type test_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type test_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $test_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test_table"
    objects: {
      another_table: Prisma.$another_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["test_table"]>
    composites: {}
  }

  type test_tableGetPayload<S extends boolean | null | undefined | test_tableDefaultArgs> = $Result.GetResult<Prisma.$test_tablePayload, S>

  type test_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<test_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test_tableCountAggregateInputType | true
    }

  export interface test_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test_table'], meta: { name: 'test_table' } }
    /**
     * Find zero or one Test_table that matches the filter.
     * @param {test_tableFindUniqueArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends test_tableFindUniqueArgs>(args: SelectSubset<T, test_tableFindUniqueArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {test_tableFindUniqueOrThrowArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends test_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, test_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableFindFirstArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends test_tableFindFirstArgs>(args?: SelectSubset<T, test_tableFindFirstArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableFindFirstOrThrowArgs} args - Arguments to find a Test_table
     * @example
     * // Get one Test_table
     * const test_table = await prisma.test_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends test_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, test_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_tables
     * const test_tables = await prisma.test_table.findMany()
     * 
     * // Get first 10 Test_tables
     * const test_tables = await prisma.test_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_tableWithIdOnly = await prisma.test_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends test_tableFindManyArgs>(args?: SelectSubset<T, test_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test_table.
     * @param {test_tableCreateArgs} args - Arguments to create a Test_table.
     * @example
     * // Create one Test_table
     * const Test_table = await prisma.test_table.create({
     *   data: {
     *     // ... data to create a Test_table
     *   }
     * })
     * 
     */
    create<T extends test_tableCreateArgs>(args: SelectSubset<T, test_tableCreateArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test_tables.
     * @param {test_tableCreateManyArgs} args - Arguments to create many Test_tables.
     * @example
     * // Create many Test_tables
     * const test_table = await prisma.test_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends test_tableCreateManyArgs>(args?: SelectSubset<T, test_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test_tables and returns the data saved in the database.
     * @param {test_tableCreateManyAndReturnArgs} args - Arguments to create many Test_tables.
     * @example
     * // Create many Test_tables
     * const test_table = await prisma.test_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test_tables and only return the `id`
     * const test_tableWithIdOnly = await prisma.test_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends test_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, test_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test_table.
     * @param {test_tableDeleteArgs} args - Arguments to delete one Test_table.
     * @example
     * // Delete one Test_table
     * const Test_table = await prisma.test_table.delete({
     *   where: {
     *     // ... filter to delete one Test_table
     *   }
     * })
     * 
     */
    delete<T extends test_tableDeleteArgs>(args: SelectSubset<T, test_tableDeleteArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test_table.
     * @param {test_tableUpdateArgs} args - Arguments to update one Test_table.
     * @example
     * // Update one Test_table
     * const test_table = await prisma.test_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends test_tableUpdateArgs>(args: SelectSubset<T, test_tableUpdateArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test_tables.
     * @param {test_tableDeleteManyArgs} args - Arguments to filter Test_tables to delete.
     * @example
     * // Delete a few Test_tables
     * const { count } = await prisma.test_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends test_tableDeleteManyArgs>(args?: SelectSubset<T, test_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_tables
     * const test_table = await prisma.test_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends test_tableUpdateManyArgs>(args: SelectSubset<T, test_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_tables and returns the data updated in the database.
     * @param {test_tableUpdateManyAndReturnArgs} args - Arguments to update many Test_tables.
     * @example
     * // Update many Test_tables
     * const test_table = await prisma.test_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Test_tables and only return the `id`
     * const test_tableWithIdOnly = await prisma.test_table.updateManyAndReturn({
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
    updateManyAndReturn<T extends test_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, test_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test_table.
     * @param {test_tableUpsertArgs} args - Arguments to update or create a Test_table.
     * @example
     * // Update or create a Test_table
     * const test_table = await prisma.test_table.upsert({
     *   create: {
     *     // ... data to create a Test_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_table we want to update
     *   }
     * })
     */
    upsert<T extends test_tableUpsertArgs>(args: SelectSubset<T, test_tableUpsertArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableCountArgs} args - Arguments to filter Test_tables to count.
     * @example
     * // Count the number of Test_tables
     * const count = await prisma.test_table.count({
     *   where: {
     *     // ... the filter for the Test_tables we want to count
     *   }
     * })
    **/
    count<T extends test_tableCountArgs>(
      args?: Subset<T, test_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test_tableAggregateArgs>(args: Subset<T, Test_tableAggregateArgs>): Prisma.PrismaPromise<GetTest_tableAggregateType<T>>

    /**
     * Group by Test_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test_tableGroupByArgs} args - Group by arguments.
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
      T extends test_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test_tableGroupByArgs['orderBy'] }
        : { orderBy?: test_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, test_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test_table model
   */
  readonly fields: test_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    another_table<T extends test_table$another_tableArgs<ExtArgs> = {}>(args?: Subset<T, test_table$another_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the test_table model
   */
  interface test_tableFieldRefs {
    readonly id: FieldRef<"test_table", 'Int'>
    readonly name: FieldRef<"test_table", 'String'>
    readonly email: FieldRef<"test_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * test_table findUnique
   */
  export type test_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table findUniqueOrThrow
   */
  export type test_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table findFirst
   */
  export type test_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_tables.
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_tables.
     */
    distinct?: Test_tableScalarFieldEnum | Test_tableScalarFieldEnum[]
  }

  /**
   * test_table findFirstOrThrow
   */
  export type test_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * Filter, which test_table to fetch.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test_tables.
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test_tables.
     */
    distinct?: Test_tableScalarFieldEnum | Test_tableScalarFieldEnum[]
  }

  /**
   * test_table findMany
   */
  export type test_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * Filter, which test_tables to fetch.
     */
    where?: test_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test_tables to fetch.
     */
    orderBy?: test_tableOrderByWithRelationInput | test_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test_tables.
     */
    cursor?: test_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test_tables.
     */
    skip?: number
    distinct?: Test_tableScalarFieldEnum | Test_tableScalarFieldEnum[]
  }

  /**
   * test_table create
   */
  export type test_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a test_table.
     */
    data: XOR<test_tableCreateInput, test_tableUncheckedCreateInput>
  }

  /**
   * test_table createMany
   */
  export type test_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test_tables.
     */
    data: test_tableCreateManyInput | test_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_table createManyAndReturn
   */
  export type test_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * The data used to create many test_tables.
     */
    data: test_tableCreateManyInput | test_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test_table update
   */
  export type test_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a test_table.
     */
    data: XOR<test_tableUpdateInput, test_tableUncheckedUpdateInput>
    /**
     * Choose, which test_table to update.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table updateMany
   */
  export type test_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test_tables.
     */
    data: XOR<test_tableUpdateManyMutationInput, test_tableUncheckedUpdateManyInput>
    /**
     * Filter which test_tables to update
     */
    where?: test_tableWhereInput
    /**
     * Limit how many test_tables to update.
     */
    limit?: number
  }

  /**
   * test_table updateManyAndReturn
   */
  export type test_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * The data used to update test_tables.
     */
    data: XOR<test_tableUpdateManyMutationInput, test_tableUncheckedUpdateManyInput>
    /**
     * Filter which test_tables to update
     */
    where?: test_tableWhereInput
    /**
     * Limit how many test_tables to update.
     */
    limit?: number
  }

  /**
   * test_table upsert
   */
  export type test_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the test_table to update in case it exists.
     */
    where: test_tableWhereUniqueInput
    /**
     * In case the test_table found by the `where` argument doesn't exist, create a new test_table with this data.
     */
    create: XOR<test_tableCreateInput, test_tableUncheckedCreateInput>
    /**
     * In case the test_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test_tableUpdateInput, test_tableUncheckedUpdateInput>
  }

  /**
   * test_table delete
   */
  export type test_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
    /**
     * Filter which test_table to delete.
     */
    where: test_tableWhereUniqueInput
  }

  /**
   * test_table deleteMany
   */
  export type test_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test_tables to delete
     */
    where?: test_tableWhereInput
    /**
     * Limit how many test_tables to delete.
     */
    limit?: number
  }

  /**
   * test_table.another_table
   */
  export type test_table$another_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    where?: another_tableWhereInput
    orderBy?: another_tableOrderByWithRelationInput | another_tableOrderByWithRelationInput[]
    cursor?: another_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Another_tableScalarFieldEnum | Another_tableScalarFieldEnum[]
  }

  /**
   * test_table without action
   */
  export type test_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test_table
     */
    select?: test_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test_table
     */
    omit?: test_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: test_tableInclude<ExtArgs> | null
  }


  /**
   * Model another_table
   */

  export type AggregateAnother_table = {
    _count: Another_tableCountAggregateOutputType | null
    _avg: Another_tableAvgAggregateOutputType | null
    _sum: Another_tableSumAggregateOutputType | null
    _min: Another_tableMinAggregateOutputType | null
    _max: Another_tableMaxAggregateOutputType | null
  }

  export type Another_tableAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type Another_tableSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type Another_tableMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    content: string | null
  }

  export type Another_tableMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    content: string | null
  }

  export type Another_tableCountAggregateOutputType = {
    id: number
    ownerId: number
    content: number
    _all: number
  }


  export type Another_tableAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type Another_tableSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type Another_tableMinAggregateInputType = {
    id?: true
    ownerId?: true
    content?: true
  }

  export type Another_tableMaxAggregateInputType = {
    id?: true
    ownerId?: true
    content?: true
  }

  export type Another_tableCountAggregateInputType = {
    id?: true
    ownerId?: true
    content?: true
    _all?: true
  }

  export type Another_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which another_table to aggregate.
     */
    where?: another_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of another_tables to fetch.
     */
    orderBy?: another_tableOrderByWithRelationInput | another_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: another_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` another_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` another_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned another_tables
    **/
    _count?: true | Another_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Another_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Another_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Another_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Another_tableMaxAggregateInputType
  }

  export type GetAnother_tableAggregateType<T extends Another_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateAnother_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnother_table[P]>
      : GetScalarType<T[P], AggregateAnother_table[P]>
  }




  export type another_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: another_tableWhereInput
    orderBy?: another_tableOrderByWithAggregationInput | another_tableOrderByWithAggregationInput[]
    by: Another_tableScalarFieldEnum[] | Another_tableScalarFieldEnum
    having?: another_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Another_tableCountAggregateInputType | true
    _avg?: Another_tableAvgAggregateInputType
    _sum?: Another_tableSumAggregateInputType
    _min?: Another_tableMinAggregateInputType
    _max?: Another_tableMaxAggregateInputType
  }

  export type Another_tableGroupByOutputType = {
    id: number
    ownerId: number
    content: string
    _count: Another_tableCountAggregateOutputType | null
    _avg: Another_tableAvgAggregateOutputType | null
    _sum: Another_tableSumAggregateOutputType | null
    _min: Another_tableMinAggregateOutputType | null
    _max: Another_tableMaxAggregateOutputType | null
  }

  type GetAnother_tableGroupByPayload<T extends another_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Another_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Another_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Another_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Another_tableGroupByOutputType[P]>
        }
      >
    >


  export type another_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    content?: boolean
    owner?: boolean | test_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["another_table"]>

  export type another_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    content?: boolean
    owner?: boolean | test_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["another_table"]>

  export type another_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    content?: boolean
    owner?: boolean | test_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["another_table"]>

  export type another_tableSelectScalar = {
    id?: boolean
    ownerId?: boolean
    content?: boolean
  }

  export type another_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "content", ExtArgs["result"]["another_table"]>
  export type another_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | test_tableDefaultArgs<ExtArgs>
  }
  export type another_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | test_tableDefaultArgs<ExtArgs>
  }
  export type another_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | test_tableDefaultArgs<ExtArgs>
  }

  export type $another_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "another_table"
    objects: {
      owner: Prisma.$test_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
      content: string
    }, ExtArgs["result"]["another_table"]>
    composites: {}
  }

  type another_tableGetPayload<S extends boolean | null | undefined | another_tableDefaultArgs> = $Result.GetResult<Prisma.$another_tablePayload, S>

  type another_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<another_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Another_tableCountAggregateInputType | true
    }

  export interface another_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['another_table'], meta: { name: 'another_table' } }
    /**
     * Find zero or one Another_table that matches the filter.
     * @param {another_tableFindUniqueArgs} args - Arguments to find a Another_table
     * @example
     * // Get one Another_table
     * const another_table = await prisma.another_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends another_tableFindUniqueArgs>(args: SelectSubset<T, another_tableFindUniqueArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Another_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {another_tableFindUniqueOrThrowArgs} args - Arguments to find a Another_table
     * @example
     * // Get one Another_table
     * const another_table = await prisma.another_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends another_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, another_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Another_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {another_tableFindFirstArgs} args - Arguments to find a Another_table
     * @example
     * // Get one Another_table
     * const another_table = await prisma.another_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends another_tableFindFirstArgs>(args?: SelectSubset<T, another_tableFindFirstArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Another_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {another_tableFindFirstOrThrowArgs} args - Arguments to find a Another_table
     * @example
     * // Get one Another_table
     * const another_table = await prisma.another_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends another_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, another_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Another_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {another_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Another_tables
     * const another_tables = await prisma.another_table.findMany()
     * 
     * // Get first 10 Another_tables
     * const another_tables = await prisma.another_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const another_tableWithIdOnly = await prisma.another_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends another_tableFindManyArgs>(args?: SelectSubset<T, another_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Another_table.
     * @param {another_tableCreateArgs} args - Arguments to create a Another_table.
     * @example
     * // Create one Another_table
     * const Another_table = await prisma.another_table.create({
     *   data: {
     *     // ... data to create a Another_table
     *   }
     * })
     * 
     */
    create<T extends another_tableCreateArgs>(args: SelectSubset<T, another_tableCreateArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Another_tables.
     * @param {another_tableCreateManyArgs} args - Arguments to create many Another_tables.
     * @example
     * // Create many Another_tables
     * const another_table = await prisma.another_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends another_tableCreateManyArgs>(args?: SelectSubset<T, another_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Another_tables and returns the data saved in the database.
     * @param {another_tableCreateManyAndReturnArgs} args - Arguments to create many Another_tables.
     * @example
     * // Create many Another_tables
     * const another_table = await prisma.another_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Another_tables and only return the `id`
     * const another_tableWithIdOnly = await prisma.another_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends another_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, another_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Another_table.
     * @param {another_tableDeleteArgs} args - Arguments to delete one Another_table.
     * @example
     * // Delete one Another_table
     * const Another_table = await prisma.another_table.delete({
     *   where: {
     *     // ... filter to delete one Another_table
     *   }
     * })
     * 
     */
    delete<T extends another_tableDeleteArgs>(args: SelectSubset<T, another_tableDeleteArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Another_table.
     * @param {another_tableUpdateArgs} args - Arguments to update one Another_table.
     * @example
     * // Update one Another_table
     * const another_table = await prisma.another_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends another_tableUpdateArgs>(args: SelectSubset<T, another_tableUpdateArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Another_tables.
     * @param {another_tableDeleteManyArgs} args - Arguments to filter Another_tables to delete.
     * @example
     * // Delete a few Another_tables
     * const { count } = await prisma.another_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends another_tableDeleteManyArgs>(args?: SelectSubset<T, another_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Another_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {another_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Another_tables
     * const another_table = await prisma.another_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends another_tableUpdateManyArgs>(args: SelectSubset<T, another_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Another_tables and returns the data updated in the database.
     * @param {another_tableUpdateManyAndReturnArgs} args - Arguments to update many Another_tables.
     * @example
     * // Update many Another_tables
     * const another_table = await prisma.another_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Another_tables and only return the `id`
     * const another_tableWithIdOnly = await prisma.another_table.updateManyAndReturn({
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
    updateManyAndReturn<T extends another_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, another_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Another_table.
     * @param {another_tableUpsertArgs} args - Arguments to update or create a Another_table.
     * @example
     * // Update or create a Another_table
     * const another_table = await prisma.another_table.upsert({
     *   create: {
     *     // ... data to create a Another_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Another_table we want to update
     *   }
     * })
     */
    upsert<T extends another_tableUpsertArgs>(args: SelectSubset<T, another_tableUpsertArgs<ExtArgs>>): Prisma__another_tableClient<$Result.GetResult<Prisma.$another_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Another_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {another_tableCountArgs} args - Arguments to filter Another_tables to count.
     * @example
     * // Count the number of Another_tables
     * const count = await prisma.another_table.count({
     *   where: {
     *     // ... the filter for the Another_tables we want to count
     *   }
     * })
    **/
    count<T extends another_tableCountArgs>(
      args?: Subset<T, another_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Another_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Another_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Another_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Another_tableAggregateArgs>(args: Subset<T, Another_tableAggregateArgs>): Prisma.PrismaPromise<GetAnother_tableAggregateType<T>>

    /**
     * Group by Another_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {another_tableGroupByArgs} args - Group by arguments.
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
      T extends another_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: another_tableGroupByArgs['orderBy'] }
        : { orderBy?: another_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, another_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnother_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the another_table model
   */
  readonly fields: another_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for another_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__another_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends test_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, test_tableDefaultArgs<ExtArgs>>): Prisma__test_tableClient<$Result.GetResult<Prisma.$test_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the another_table model
   */
  interface another_tableFieldRefs {
    readonly id: FieldRef<"another_table", 'Int'>
    readonly ownerId: FieldRef<"another_table", 'Int'>
    readonly content: FieldRef<"another_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * another_table findUnique
   */
  export type another_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * Filter, which another_table to fetch.
     */
    where: another_tableWhereUniqueInput
  }

  /**
   * another_table findUniqueOrThrow
   */
  export type another_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * Filter, which another_table to fetch.
     */
    where: another_tableWhereUniqueInput
  }

  /**
   * another_table findFirst
   */
  export type another_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * Filter, which another_table to fetch.
     */
    where?: another_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of another_tables to fetch.
     */
    orderBy?: another_tableOrderByWithRelationInput | another_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for another_tables.
     */
    cursor?: another_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` another_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` another_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of another_tables.
     */
    distinct?: Another_tableScalarFieldEnum | Another_tableScalarFieldEnum[]
  }

  /**
   * another_table findFirstOrThrow
   */
  export type another_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * Filter, which another_table to fetch.
     */
    where?: another_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of another_tables to fetch.
     */
    orderBy?: another_tableOrderByWithRelationInput | another_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for another_tables.
     */
    cursor?: another_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` another_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` another_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of another_tables.
     */
    distinct?: Another_tableScalarFieldEnum | Another_tableScalarFieldEnum[]
  }

  /**
   * another_table findMany
   */
  export type another_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * Filter, which another_tables to fetch.
     */
    where?: another_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of another_tables to fetch.
     */
    orderBy?: another_tableOrderByWithRelationInput | another_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing another_tables.
     */
    cursor?: another_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` another_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` another_tables.
     */
    skip?: number
    distinct?: Another_tableScalarFieldEnum | Another_tableScalarFieldEnum[]
  }

  /**
   * another_table create
   */
  export type another_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a another_table.
     */
    data: XOR<another_tableCreateInput, another_tableUncheckedCreateInput>
  }

  /**
   * another_table createMany
   */
  export type another_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many another_tables.
     */
    data: another_tableCreateManyInput | another_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * another_table createManyAndReturn
   */
  export type another_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * The data used to create many another_tables.
     */
    data: another_tableCreateManyInput | another_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * another_table update
   */
  export type another_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a another_table.
     */
    data: XOR<another_tableUpdateInput, another_tableUncheckedUpdateInput>
    /**
     * Choose, which another_table to update.
     */
    where: another_tableWhereUniqueInput
  }

  /**
   * another_table updateMany
   */
  export type another_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update another_tables.
     */
    data: XOR<another_tableUpdateManyMutationInput, another_tableUncheckedUpdateManyInput>
    /**
     * Filter which another_tables to update
     */
    where?: another_tableWhereInput
    /**
     * Limit how many another_tables to update.
     */
    limit?: number
  }

  /**
   * another_table updateManyAndReturn
   */
  export type another_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * The data used to update another_tables.
     */
    data: XOR<another_tableUpdateManyMutationInput, another_tableUncheckedUpdateManyInput>
    /**
     * Filter which another_tables to update
     */
    where?: another_tableWhereInput
    /**
     * Limit how many another_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * another_table upsert
   */
  export type another_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the another_table to update in case it exists.
     */
    where: another_tableWhereUniqueInput
    /**
     * In case the another_table found by the `where` argument doesn't exist, create a new another_table with this data.
     */
    create: XOR<another_tableCreateInput, another_tableUncheckedCreateInput>
    /**
     * In case the another_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<another_tableUpdateInput, another_tableUncheckedUpdateInput>
  }

  /**
   * another_table delete
   */
  export type another_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
    /**
     * Filter which another_table to delete.
     */
    where: another_tableWhereUniqueInput
  }

  /**
   * another_table deleteMany
   */
  export type another_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which another_tables to delete
     */
    where?: another_tableWhereInput
    /**
     * Limit how many another_tables to delete.
     */
    limit?: number
  }

  /**
   * another_table without action
   */
  export type another_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the another_table
     */
    select?: another_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the another_table
     */
    omit?: another_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: another_tableInclude<ExtArgs> | null
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


  export const Test_tableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type Test_tableScalarFieldEnum = (typeof Test_tableScalarFieldEnum)[keyof typeof Test_tableScalarFieldEnum]


  export const Another_tableScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    content: 'content'
  };

  export type Another_tableScalarFieldEnum = (typeof Another_tableScalarFieldEnum)[keyof typeof Another_tableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type test_tableWhereInput = {
    AND?: test_tableWhereInput | test_tableWhereInput[]
    OR?: test_tableWhereInput[]
    NOT?: test_tableWhereInput | test_tableWhereInput[]
    id?: IntFilter<"test_table"> | number
    name?: StringFilter<"test_table"> | string
    email?: StringFilter<"test_table"> | string
    another_table?: Another_tableListRelationFilter
  }

  export type test_tableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    another_table?: another_tableOrderByRelationAggregateInput
  }

  export type test_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: test_tableWhereInput | test_tableWhereInput[]
    OR?: test_tableWhereInput[]
    NOT?: test_tableWhereInput | test_tableWhereInput[]
    name?: StringFilter<"test_table"> | string
    another_table?: Another_tableListRelationFilter
  }, "id" | "email">

  export type test_tableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: test_tableCountOrderByAggregateInput
    _avg?: test_tableAvgOrderByAggregateInput
    _max?: test_tableMaxOrderByAggregateInput
    _min?: test_tableMinOrderByAggregateInput
    _sum?: test_tableSumOrderByAggregateInput
  }

  export type test_tableScalarWhereWithAggregatesInput = {
    AND?: test_tableScalarWhereWithAggregatesInput | test_tableScalarWhereWithAggregatesInput[]
    OR?: test_tableScalarWhereWithAggregatesInput[]
    NOT?: test_tableScalarWhereWithAggregatesInput | test_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"test_table"> | number
    name?: StringWithAggregatesFilter<"test_table"> | string
    email?: StringWithAggregatesFilter<"test_table"> | string
  }

  export type another_tableWhereInput = {
    AND?: another_tableWhereInput | another_tableWhereInput[]
    OR?: another_tableWhereInput[]
    NOT?: another_tableWhereInput | another_tableWhereInput[]
    id?: IntFilter<"another_table"> | number
    ownerId?: IntFilter<"another_table"> | number
    content?: StringFilter<"another_table"> | string
    owner?: XOR<Test_tableScalarRelationFilter, test_tableWhereInput>
  }

  export type another_tableOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    content?: SortOrder
    owner?: test_tableOrderByWithRelationInput
  }

  export type another_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: another_tableWhereInput | another_tableWhereInput[]
    OR?: another_tableWhereInput[]
    NOT?: another_tableWhereInput | another_tableWhereInput[]
    ownerId?: IntFilter<"another_table"> | number
    content?: StringFilter<"another_table"> | string
    owner?: XOR<Test_tableScalarRelationFilter, test_tableWhereInput>
  }, "id">

  export type another_tableOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    content?: SortOrder
    _count?: another_tableCountOrderByAggregateInput
    _avg?: another_tableAvgOrderByAggregateInput
    _max?: another_tableMaxOrderByAggregateInput
    _min?: another_tableMinOrderByAggregateInput
    _sum?: another_tableSumOrderByAggregateInput
  }

  export type another_tableScalarWhereWithAggregatesInput = {
    AND?: another_tableScalarWhereWithAggregatesInput | another_tableScalarWhereWithAggregatesInput[]
    OR?: another_tableScalarWhereWithAggregatesInput[]
    NOT?: another_tableScalarWhereWithAggregatesInput | another_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"another_table"> | number
    ownerId?: IntWithAggregatesFilter<"another_table"> | number
    content?: StringWithAggregatesFilter<"another_table"> | string
  }

  export type test_tableCreateInput = {
    name: string
    email: string
    another_table?: another_tableCreateNestedManyWithoutOwnerInput
  }

  export type test_tableUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    another_table?: another_tableUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type test_tableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    another_table?: another_tableUpdateManyWithoutOwnerNestedInput
  }

  export type test_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    another_table?: another_tableUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type test_tableCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type test_tableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type test_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type another_tableCreateInput = {
    content: string
    owner: test_tableCreateNestedOneWithoutAnother_tableInput
  }

  export type another_tableUncheckedCreateInput = {
    id?: number
    ownerId: number
    content: string
  }

  export type another_tableUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    owner?: test_tableUpdateOneRequiredWithoutAnother_tableNestedInput
  }

  export type another_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type another_tableCreateManyInput = {
    id?: number
    ownerId: number
    content: string
  }

  export type another_tableUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type another_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
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

  export type Another_tableListRelationFilter = {
    every?: another_tableWhereInput
    some?: another_tableWhereInput
    none?: another_tableWhereInput
  }

  export type another_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type test_tableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type test_tableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type test_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type test_tableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type test_tableSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type Test_tableScalarRelationFilter = {
    is?: test_tableWhereInput
    isNot?: test_tableWhereInput
  }

  export type another_tableCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    content?: SortOrder
  }

  export type another_tableAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type another_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    content?: SortOrder
  }

  export type another_tableMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    content?: SortOrder
  }

  export type another_tableSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type another_tableCreateNestedManyWithoutOwnerInput = {
    create?: XOR<another_tableCreateWithoutOwnerInput, another_tableUncheckedCreateWithoutOwnerInput> | another_tableCreateWithoutOwnerInput[] | another_tableUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: another_tableCreateOrConnectWithoutOwnerInput | another_tableCreateOrConnectWithoutOwnerInput[]
    createMany?: another_tableCreateManyOwnerInputEnvelope
    connect?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
  }

  export type another_tableUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<another_tableCreateWithoutOwnerInput, another_tableUncheckedCreateWithoutOwnerInput> | another_tableCreateWithoutOwnerInput[] | another_tableUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: another_tableCreateOrConnectWithoutOwnerInput | another_tableCreateOrConnectWithoutOwnerInput[]
    createMany?: another_tableCreateManyOwnerInputEnvelope
    connect?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type another_tableUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<another_tableCreateWithoutOwnerInput, another_tableUncheckedCreateWithoutOwnerInput> | another_tableCreateWithoutOwnerInput[] | another_tableUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: another_tableCreateOrConnectWithoutOwnerInput | another_tableCreateOrConnectWithoutOwnerInput[]
    upsert?: another_tableUpsertWithWhereUniqueWithoutOwnerInput | another_tableUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: another_tableCreateManyOwnerInputEnvelope
    set?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    disconnect?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    delete?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    connect?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    update?: another_tableUpdateWithWhereUniqueWithoutOwnerInput | another_tableUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: another_tableUpdateManyWithWhereWithoutOwnerInput | another_tableUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: another_tableScalarWhereInput | another_tableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type another_tableUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<another_tableCreateWithoutOwnerInput, another_tableUncheckedCreateWithoutOwnerInput> | another_tableCreateWithoutOwnerInput[] | another_tableUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: another_tableCreateOrConnectWithoutOwnerInput | another_tableCreateOrConnectWithoutOwnerInput[]
    upsert?: another_tableUpsertWithWhereUniqueWithoutOwnerInput | another_tableUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: another_tableCreateManyOwnerInputEnvelope
    set?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    disconnect?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    delete?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    connect?: another_tableWhereUniqueInput | another_tableWhereUniqueInput[]
    update?: another_tableUpdateWithWhereUniqueWithoutOwnerInput | another_tableUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: another_tableUpdateManyWithWhereWithoutOwnerInput | another_tableUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: another_tableScalarWhereInput | another_tableScalarWhereInput[]
  }

  export type test_tableCreateNestedOneWithoutAnother_tableInput = {
    create?: XOR<test_tableCreateWithoutAnother_tableInput, test_tableUncheckedCreateWithoutAnother_tableInput>
    connectOrCreate?: test_tableCreateOrConnectWithoutAnother_tableInput
    connect?: test_tableWhereUniqueInput
  }

  export type test_tableUpdateOneRequiredWithoutAnother_tableNestedInput = {
    create?: XOR<test_tableCreateWithoutAnother_tableInput, test_tableUncheckedCreateWithoutAnother_tableInput>
    connectOrCreate?: test_tableCreateOrConnectWithoutAnother_tableInput
    upsert?: test_tableUpsertWithoutAnother_tableInput
    connect?: test_tableWhereUniqueInput
    update?: XOR<XOR<test_tableUpdateToOneWithWhereWithoutAnother_tableInput, test_tableUpdateWithoutAnother_tableInput>, test_tableUncheckedUpdateWithoutAnother_tableInput>
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

  export type another_tableCreateWithoutOwnerInput = {
    content: string
  }

  export type another_tableUncheckedCreateWithoutOwnerInput = {
    id?: number
    content: string
  }

  export type another_tableCreateOrConnectWithoutOwnerInput = {
    where: another_tableWhereUniqueInput
    create: XOR<another_tableCreateWithoutOwnerInput, another_tableUncheckedCreateWithoutOwnerInput>
  }

  export type another_tableCreateManyOwnerInputEnvelope = {
    data: another_tableCreateManyOwnerInput | another_tableCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type another_tableUpsertWithWhereUniqueWithoutOwnerInput = {
    where: another_tableWhereUniqueInput
    update: XOR<another_tableUpdateWithoutOwnerInput, another_tableUncheckedUpdateWithoutOwnerInput>
    create: XOR<another_tableCreateWithoutOwnerInput, another_tableUncheckedCreateWithoutOwnerInput>
  }

  export type another_tableUpdateWithWhereUniqueWithoutOwnerInput = {
    where: another_tableWhereUniqueInput
    data: XOR<another_tableUpdateWithoutOwnerInput, another_tableUncheckedUpdateWithoutOwnerInput>
  }

  export type another_tableUpdateManyWithWhereWithoutOwnerInput = {
    where: another_tableScalarWhereInput
    data: XOR<another_tableUpdateManyMutationInput, another_tableUncheckedUpdateManyWithoutOwnerInput>
  }

  export type another_tableScalarWhereInput = {
    AND?: another_tableScalarWhereInput | another_tableScalarWhereInput[]
    OR?: another_tableScalarWhereInput[]
    NOT?: another_tableScalarWhereInput | another_tableScalarWhereInput[]
    id?: IntFilter<"another_table"> | number
    ownerId?: IntFilter<"another_table"> | number
    content?: StringFilter<"another_table"> | string
  }

  export type test_tableCreateWithoutAnother_tableInput = {
    name: string
    email: string
  }

  export type test_tableUncheckedCreateWithoutAnother_tableInput = {
    id?: number
    name: string
    email: string
  }

  export type test_tableCreateOrConnectWithoutAnother_tableInput = {
    where: test_tableWhereUniqueInput
    create: XOR<test_tableCreateWithoutAnother_tableInput, test_tableUncheckedCreateWithoutAnother_tableInput>
  }

  export type test_tableUpsertWithoutAnother_tableInput = {
    update: XOR<test_tableUpdateWithoutAnother_tableInput, test_tableUncheckedUpdateWithoutAnother_tableInput>
    create: XOR<test_tableCreateWithoutAnother_tableInput, test_tableUncheckedCreateWithoutAnother_tableInput>
    where?: test_tableWhereInput
  }

  export type test_tableUpdateToOneWithWhereWithoutAnother_tableInput = {
    where?: test_tableWhereInput
    data: XOR<test_tableUpdateWithoutAnother_tableInput, test_tableUncheckedUpdateWithoutAnother_tableInput>
  }

  export type test_tableUpdateWithoutAnother_tableInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type test_tableUncheckedUpdateWithoutAnother_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type another_tableCreateManyOwnerInput = {
    id?: number
    content: string
  }

  export type another_tableUpdateWithoutOwnerInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type another_tableUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type another_tableUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
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