
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PracticeBank
 * 
 */
export type PracticeBank = $Result.DefaultSelection<Prisma.$PracticeBankPayload>
/**
 * Model ScheduledTest
 * 
 */
export type ScheduledTest = $Result.DefaultSelection<Prisma.$ScheduledTestPayload>
/**
 * Model StudentAnswer
 * 
 */
export type StudentAnswer = $Result.DefaultSelection<Prisma.$StudentAnswerPayload>
/**
 * Model TestSubmission
 * 
 */
export type TestSubmission = $Result.DefaultSelection<Prisma.$TestSubmissionPayload>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.practiceBank`: Exposes CRUD operations for the **PracticeBank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PracticeBanks
    * const practiceBanks = await prisma.practiceBank.findMany()
    * ```
    */
  get practiceBank(): Prisma.PracticeBankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledTest`: Exposes CRUD operations for the **ScheduledTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledTests
    * const scheduledTests = await prisma.scheduledTest.findMany()
    * ```
    */
  get scheduledTest(): Prisma.ScheduledTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAnswer`: Exposes CRUD operations for the **StudentAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAnswers
    * const studentAnswers = await prisma.studentAnswer.findMany()
    * ```
    */
  get studentAnswer(): Prisma.StudentAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testSubmission`: Exposes CRUD operations for the **TestSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestSubmissions
    * const testSubmissions = await prisma.testSubmission.findMany()
    * ```
    */
  get testSubmission(): Prisma.TestSubmissionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    PracticeBank: 'PracticeBank',
    ScheduledTest: 'ScheduledTest',
    StudentAnswer: 'StudentAnswer',
    TestSubmission: 'TestSubmission'
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
      modelProps: "user" | "practiceBank" | "scheduledTest" | "studentAnswer" | "testSubmission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PracticeBank: {
        payload: Prisma.$PracticeBankPayload<ExtArgs>
        fields: Prisma.PracticeBankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PracticeBankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PracticeBankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload>
          }
          findFirst: {
            args: Prisma.PracticeBankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PracticeBankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload>
          }
          findMany: {
            args: Prisma.PracticeBankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload>[]
          }
          create: {
            args: Prisma.PracticeBankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload>
          }
          createMany: {
            args: Prisma.PracticeBankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PracticeBankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload>
          }
          update: {
            args: Prisma.PracticeBankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload>
          }
          deleteMany: {
            args: Prisma.PracticeBankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PracticeBankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PracticeBankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeBankPayload>
          }
          aggregate: {
            args: Prisma.PracticeBankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePracticeBank>
          }
          groupBy: {
            args: Prisma.PracticeBankGroupByArgs<ExtArgs>
            result: $Utils.Optional<PracticeBankGroupByOutputType>[]
          }
          count: {
            args: Prisma.PracticeBankCountArgs<ExtArgs>
            result: $Utils.Optional<PracticeBankCountAggregateOutputType> | number
          }
        }
      }
      ScheduledTest: {
        payload: Prisma.$ScheduledTestPayload<ExtArgs>
        fields: Prisma.ScheduledTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload>
          }
          findFirst: {
            args: Prisma.ScheduledTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload>
          }
          findMany: {
            args: Prisma.ScheduledTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload>[]
          }
          create: {
            args: Prisma.ScheduledTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload>
          }
          createMany: {
            args: Prisma.ScheduledTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduledTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload>
          }
          update: {
            args: Prisma.ScheduledTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload>
          }
          deleteMany: {
            args: Prisma.ScheduledTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduledTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledTestPayload>
          }
          aggregate: {
            args: Prisma.ScheduledTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledTest>
          }
          groupBy: {
            args: Prisma.ScheduledTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledTestCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledTestCountAggregateOutputType> | number
          }
        }
      }
      StudentAnswer: {
        payload: Prisma.$StudentAnswerPayload<ExtArgs>
        fields: Prisma.StudentAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          findFirst: {
            args: Prisma.StudentAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          findMany: {
            args: Prisma.StudentAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>[]
          }
          create: {
            args: Prisma.StudentAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          createMany: {
            args: Prisma.StudentAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          update: {
            args: Prisma.StudentAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          deleteMany: {
            args: Prisma.StudentAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAnswerPayload>
          }
          aggregate: {
            args: Prisma.StudentAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAnswer>
          }
          groupBy: {
            args: Prisma.StudentAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAnswerCountAggregateOutputType> | number
          }
        }
      }
      TestSubmission: {
        payload: Prisma.$TestSubmissionPayload<ExtArgs>
        fields: Prisma.TestSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload>
          }
          findFirst: {
            args: Prisma.TestSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload>
          }
          findMany: {
            args: Prisma.TestSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload>[]
          }
          create: {
            args: Prisma.TestSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload>
          }
          createMany: {
            args: Prisma.TestSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload>
          }
          update: {
            args: Prisma.TestSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.TestSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestSubmissionPayload>
          }
          aggregate: {
            args: Prisma.TestSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestSubmission>
          }
          groupBy: {
            args: Prisma.TestSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<TestSubmissionCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    practiceBank?: PracticeBankOmit
    scheduledTest?: ScheduledTestOmit
    studentAnswer?: StudentAnswerOmit
    testSubmission?: TestSubmissionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdPractices: number
    scheduledTests: number
    submissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdPractices?: boolean | UserCountOutputTypeCountCreatedPracticesArgs
    scheduledTests?: boolean | UserCountOutputTypeCountScheduledTestsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
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
  export type UserCountOutputTypeCountCreatedPracticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeBankWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScheduledTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledTestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestSubmissionWhereInput
  }


  /**
   * Count Type PracticeBankCountOutputType
   */

  export type PracticeBankCountOutputType = {
    scheduledTests: number
  }

  export type PracticeBankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledTests?: boolean | PracticeBankCountOutputTypeCountScheduledTestsArgs
  }

  // Custom InputTypes
  /**
   * PracticeBankCountOutputType without action
   */
  export type PracticeBankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBankCountOutputType
     */
    select?: PracticeBankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PracticeBankCountOutputType without action
   */
  export type PracticeBankCountOutputTypeCountScheduledTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledTestWhereInput
  }


  /**
   * Count Type ScheduledTestCountOutputType
   */

  export type ScheduledTestCountOutputType = {
    submissions: number
    answers: number
  }

  export type ScheduledTestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ScheduledTestCountOutputTypeCountSubmissionsArgs
    answers?: boolean | ScheduledTestCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * ScheduledTestCountOutputType without action
   */
  export type ScheduledTestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTestCountOutputType
     */
    select?: ScheduledTestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduledTestCountOutputType without action
   */
  export type ScheduledTestCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestSubmissionWhereInput
  }

  /**
   * ScheduledTestCountOutputType without action
   */
  export type ScheduledTestCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    role: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    role: string
    name: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdPractices?: boolean | User$createdPracticesArgs<ExtArgs>
    scheduledTests?: boolean | User$scheduledTestsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdPractices?: boolean | User$createdPracticesArgs<ExtArgs>
    scheduledTests?: boolean | User$scheduledTestsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdPractices: Prisma.$PracticeBankPayload<ExtArgs>[]
      scheduledTests: Prisma.$ScheduledTestPayload<ExtArgs>[]
      submissions: Prisma.$TestSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      role: string
      name: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdPractices<T extends User$createdPracticesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdPracticesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scheduledTests<T extends User$scheduledTestsArgs<ExtArgs> = {}>(args?: Subset<T, User$scheduledTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdPractices
   */
  export type User$createdPracticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    where?: PracticeBankWhereInput
    orderBy?: PracticeBankOrderByWithRelationInput | PracticeBankOrderByWithRelationInput[]
    cursor?: PracticeBankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeBankScalarFieldEnum | PracticeBankScalarFieldEnum[]
  }

  /**
   * User.scheduledTests
   */
  export type User$scheduledTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    where?: ScheduledTestWhereInput
    orderBy?: ScheduledTestOrderByWithRelationInput | ScheduledTestOrderByWithRelationInput[]
    cursor?: ScheduledTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledTestScalarFieldEnum | ScheduledTestScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    where?: TestSubmissionWhereInput
    orderBy?: TestSubmissionOrderByWithRelationInput | TestSubmissionOrderByWithRelationInput[]
    cursor?: TestSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestSubmissionScalarFieldEnum | TestSubmissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PracticeBank
   */

  export type AggregatePracticeBank = {
    _count: PracticeBankCountAggregateOutputType | null
    _min: PracticeBankMinAggregateOutputType | null
    _max: PracticeBankMaxAggregateOutputType | null
  }

  export type PracticeBankMinAggregateOutputType = {
    id: string | null
    title: string | null
    businessDomain: string | null
    category: string | null
    focusAreas: string | null
    questions: string | null
    answers: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticeBankMaxAggregateOutputType = {
    id: string | null
    title: string | null
    businessDomain: string | null
    category: string | null
    focusAreas: string | null
    questions: string | null
    answers: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticeBankCountAggregateOutputType = {
    id: number
    title: number
    businessDomain: number
    category: number
    focusAreas: number
    questions: number
    answers: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PracticeBankMinAggregateInputType = {
    id?: true
    title?: true
    businessDomain?: true
    category?: true
    focusAreas?: true
    questions?: true
    answers?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticeBankMaxAggregateInputType = {
    id?: true
    title?: true
    businessDomain?: true
    category?: true
    focusAreas?: true
    questions?: true
    answers?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticeBankCountAggregateInputType = {
    id?: true
    title?: true
    businessDomain?: true
    category?: true
    focusAreas?: true
    questions?: true
    answers?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PracticeBankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeBank to aggregate.
     */
    where?: PracticeBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeBanks to fetch.
     */
    orderBy?: PracticeBankOrderByWithRelationInput | PracticeBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PracticeBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PracticeBanks
    **/
    _count?: true | PracticeBankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticeBankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticeBankMaxAggregateInputType
  }

  export type GetPracticeBankAggregateType<T extends PracticeBankAggregateArgs> = {
        [P in keyof T & keyof AggregatePracticeBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePracticeBank[P]>
      : GetScalarType<T[P], AggregatePracticeBank[P]>
  }




  export type PracticeBankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeBankWhereInput
    orderBy?: PracticeBankOrderByWithAggregationInput | PracticeBankOrderByWithAggregationInput[]
    by: PracticeBankScalarFieldEnum[] | PracticeBankScalarFieldEnum
    having?: PracticeBankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticeBankCountAggregateInputType | true
    _min?: PracticeBankMinAggregateInputType
    _max?: PracticeBankMaxAggregateInputType
  }

  export type PracticeBankGroupByOutputType = {
    id: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: PracticeBankCountAggregateOutputType | null
    _min: PracticeBankMinAggregateOutputType | null
    _max: PracticeBankMaxAggregateOutputType | null
  }

  type GetPracticeBankGroupByPayload<T extends PracticeBankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticeBankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticeBankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticeBankGroupByOutputType[P]>
            : GetScalarType<T[P], PracticeBankGroupByOutputType[P]>
        }
      >
    >


  export type PracticeBankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    businessDomain?: boolean
    category?: boolean
    focusAreas?: boolean
    questions?: boolean
    answers?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    scheduledTests?: boolean | PracticeBank$scheduledTestsArgs<ExtArgs>
    _count?: boolean | PracticeBankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceBank"]>



  export type PracticeBankSelectScalar = {
    id?: boolean
    title?: boolean
    businessDomain?: boolean
    category?: boolean
    focusAreas?: boolean
    questions?: boolean
    answers?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PracticeBankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "businessDomain" | "category" | "focusAreas" | "questions" | "answers" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["practiceBank"]>
  export type PracticeBankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    scheduledTests?: boolean | PracticeBank$scheduledTestsArgs<ExtArgs>
    _count?: boolean | PracticeBankCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PracticeBankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PracticeBank"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      scheduledTests: Prisma.$ScheduledTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      businessDomain: string
      category: string
      focusAreas: string
      questions: string
      answers: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["practiceBank"]>
    composites: {}
  }

  type PracticeBankGetPayload<S extends boolean | null | undefined | PracticeBankDefaultArgs> = $Result.GetResult<Prisma.$PracticeBankPayload, S>

  type PracticeBankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PracticeBankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PracticeBankCountAggregateInputType | true
    }

  export interface PracticeBankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PracticeBank'], meta: { name: 'PracticeBank' } }
    /**
     * Find zero or one PracticeBank that matches the filter.
     * @param {PracticeBankFindUniqueArgs} args - Arguments to find a PracticeBank
     * @example
     * // Get one PracticeBank
     * const practiceBank = await prisma.practiceBank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PracticeBankFindUniqueArgs>(args: SelectSubset<T, PracticeBankFindUniqueArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PracticeBank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PracticeBankFindUniqueOrThrowArgs} args - Arguments to find a PracticeBank
     * @example
     * // Get one PracticeBank
     * const practiceBank = await prisma.practiceBank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PracticeBankFindUniqueOrThrowArgs>(args: SelectSubset<T, PracticeBankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeBank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeBankFindFirstArgs} args - Arguments to find a PracticeBank
     * @example
     * // Get one PracticeBank
     * const practiceBank = await prisma.practiceBank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PracticeBankFindFirstArgs>(args?: SelectSubset<T, PracticeBankFindFirstArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeBank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeBankFindFirstOrThrowArgs} args - Arguments to find a PracticeBank
     * @example
     * // Get one PracticeBank
     * const practiceBank = await prisma.practiceBank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PracticeBankFindFirstOrThrowArgs>(args?: SelectSubset<T, PracticeBankFindFirstOrThrowArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PracticeBanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeBankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PracticeBanks
     * const practiceBanks = await prisma.practiceBank.findMany()
     * 
     * // Get first 10 PracticeBanks
     * const practiceBanks = await prisma.practiceBank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const practiceBankWithIdOnly = await prisma.practiceBank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PracticeBankFindManyArgs>(args?: SelectSubset<T, PracticeBankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PracticeBank.
     * @param {PracticeBankCreateArgs} args - Arguments to create a PracticeBank.
     * @example
     * // Create one PracticeBank
     * const PracticeBank = await prisma.practiceBank.create({
     *   data: {
     *     // ... data to create a PracticeBank
     *   }
     * })
     * 
     */
    create<T extends PracticeBankCreateArgs>(args: SelectSubset<T, PracticeBankCreateArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PracticeBanks.
     * @param {PracticeBankCreateManyArgs} args - Arguments to create many PracticeBanks.
     * @example
     * // Create many PracticeBanks
     * const practiceBank = await prisma.practiceBank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PracticeBankCreateManyArgs>(args?: SelectSubset<T, PracticeBankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PracticeBank.
     * @param {PracticeBankDeleteArgs} args - Arguments to delete one PracticeBank.
     * @example
     * // Delete one PracticeBank
     * const PracticeBank = await prisma.practiceBank.delete({
     *   where: {
     *     // ... filter to delete one PracticeBank
     *   }
     * })
     * 
     */
    delete<T extends PracticeBankDeleteArgs>(args: SelectSubset<T, PracticeBankDeleteArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PracticeBank.
     * @param {PracticeBankUpdateArgs} args - Arguments to update one PracticeBank.
     * @example
     * // Update one PracticeBank
     * const practiceBank = await prisma.practiceBank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PracticeBankUpdateArgs>(args: SelectSubset<T, PracticeBankUpdateArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PracticeBanks.
     * @param {PracticeBankDeleteManyArgs} args - Arguments to filter PracticeBanks to delete.
     * @example
     * // Delete a few PracticeBanks
     * const { count } = await prisma.practiceBank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PracticeBankDeleteManyArgs>(args?: SelectSubset<T, PracticeBankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeBankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PracticeBanks
     * const practiceBank = await prisma.practiceBank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PracticeBankUpdateManyArgs>(args: SelectSubset<T, PracticeBankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PracticeBank.
     * @param {PracticeBankUpsertArgs} args - Arguments to update or create a PracticeBank.
     * @example
     * // Update or create a PracticeBank
     * const practiceBank = await prisma.practiceBank.upsert({
     *   create: {
     *     // ... data to create a PracticeBank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PracticeBank we want to update
     *   }
     * })
     */
    upsert<T extends PracticeBankUpsertArgs>(args: SelectSubset<T, PracticeBankUpsertArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PracticeBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeBankCountArgs} args - Arguments to filter PracticeBanks to count.
     * @example
     * // Count the number of PracticeBanks
     * const count = await prisma.practiceBank.count({
     *   where: {
     *     // ... the filter for the PracticeBanks we want to count
     *   }
     * })
    **/
    count<T extends PracticeBankCountArgs>(
      args?: Subset<T, PracticeBankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticeBankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PracticeBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeBankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PracticeBankAggregateArgs>(args: Subset<T, PracticeBankAggregateArgs>): Prisma.PrismaPromise<GetPracticeBankAggregateType<T>>

    /**
     * Group by PracticeBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeBankGroupByArgs} args - Group by arguments.
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
      T extends PracticeBankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PracticeBankGroupByArgs['orderBy'] }
        : { orderBy?: PracticeBankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PracticeBankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticeBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PracticeBank model
   */
  readonly fields: PracticeBankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PracticeBank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PracticeBankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduledTests<T extends PracticeBank$scheduledTestsArgs<ExtArgs> = {}>(args?: Subset<T, PracticeBank$scheduledTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PracticeBank model
   */
  interface PracticeBankFieldRefs {
    readonly id: FieldRef<"PracticeBank", 'String'>
    readonly title: FieldRef<"PracticeBank", 'String'>
    readonly businessDomain: FieldRef<"PracticeBank", 'String'>
    readonly category: FieldRef<"PracticeBank", 'String'>
    readonly focusAreas: FieldRef<"PracticeBank", 'String'>
    readonly questions: FieldRef<"PracticeBank", 'String'>
    readonly answers: FieldRef<"PracticeBank", 'String'>
    readonly createdById: FieldRef<"PracticeBank", 'String'>
    readonly createdAt: FieldRef<"PracticeBank", 'DateTime'>
    readonly updatedAt: FieldRef<"PracticeBank", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PracticeBank findUnique
   */
  export type PracticeBankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * Filter, which PracticeBank to fetch.
     */
    where: PracticeBankWhereUniqueInput
  }

  /**
   * PracticeBank findUniqueOrThrow
   */
  export type PracticeBankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * Filter, which PracticeBank to fetch.
     */
    where: PracticeBankWhereUniqueInput
  }

  /**
   * PracticeBank findFirst
   */
  export type PracticeBankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * Filter, which PracticeBank to fetch.
     */
    where?: PracticeBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeBanks to fetch.
     */
    orderBy?: PracticeBankOrderByWithRelationInput | PracticeBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeBanks.
     */
    cursor?: PracticeBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeBanks.
     */
    distinct?: PracticeBankScalarFieldEnum | PracticeBankScalarFieldEnum[]
  }

  /**
   * PracticeBank findFirstOrThrow
   */
  export type PracticeBankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * Filter, which PracticeBank to fetch.
     */
    where?: PracticeBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeBanks to fetch.
     */
    orderBy?: PracticeBankOrderByWithRelationInput | PracticeBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeBanks.
     */
    cursor?: PracticeBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeBanks.
     */
    distinct?: PracticeBankScalarFieldEnum | PracticeBankScalarFieldEnum[]
  }

  /**
   * PracticeBank findMany
   */
  export type PracticeBankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * Filter, which PracticeBanks to fetch.
     */
    where?: PracticeBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeBanks to fetch.
     */
    orderBy?: PracticeBankOrderByWithRelationInput | PracticeBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PracticeBanks.
     */
    cursor?: PracticeBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeBanks.
     */
    skip?: number
    distinct?: PracticeBankScalarFieldEnum | PracticeBankScalarFieldEnum[]
  }

  /**
   * PracticeBank create
   */
  export type PracticeBankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * The data needed to create a PracticeBank.
     */
    data: XOR<PracticeBankCreateInput, PracticeBankUncheckedCreateInput>
  }

  /**
   * PracticeBank createMany
   */
  export type PracticeBankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PracticeBanks.
     */
    data: PracticeBankCreateManyInput | PracticeBankCreateManyInput[]
  }

  /**
   * PracticeBank update
   */
  export type PracticeBankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * The data needed to update a PracticeBank.
     */
    data: XOR<PracticeBankUpdateInput, PracticeBankUncheckedUpdateInput>
    /**
     * Choose, which PracticeBank to update.
     */
    where: PracticeBankWhereUniqueInput
  }

  /**
   * PracticeBank updateMany
   */
  export type PracticeBankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PracticeBanks.
     */
    data: XOR<PracticeBankUpdateManyMutationInput, PracticeBankUncheckedUpdateManyInput>
    /**
     * Filter which PracticeBanks to update
     */
    where?: PracticeBankWhereInput
    /**
     * Limit how many PracticeBanks to update.
     */
    limit?: number
  }

  /**
   * PracticeBank upsert
   */
  export type PracticeBankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * The filter to search for the PracticeBank to update in case it exists.
     */
    where: PracticeBankWhereUniqueInput
    /**
     * In case the PracticeBank found by the `where` argument doesn't exist, create a new PracticeBank with this data.
     */
    create: XOR<PracticeBankCreateInput, PracticeBankUncheckedCreateInput>
    /**
     * In case the PracticeBank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PracticeBankUpdateInput, PracticeBankUncheckedUpdateInput>
  }

  /**
   * PracticeBank delete
   */
  export type PracticeBankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
    /**
     * Filter which PracticeBank to delete.
     */
    where: PracticeBankWhereUniqueInput
  }

  /**
   * PracticeBank deleteMany
   */
  export type PracticeBankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeBanks to delete
     */
    where?: PracticeBankWhereInput
    /**
     * Limit how many PracticeBanks to delete.
     */
    limit?: number
  }

  /**
   * PracticeBank.scheduledTests
   */
  export type PracticeBank$scheduledTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    where?: ScheduledTestWhereInput
    orderBy?: ScheduledTestOrderByWithRelationInput | ScheduledTestOrderByWithRelationInput[]
    cursor?: ScheduledTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledTestScalarFieldEnum | ScheduledTestScalarFieldEnum[]
  }

  /**
   * PracticeBank without action
   */
  export type PracticeBankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeBank
     */
    select?: PracticeBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeBank
     */
    omit?: PracticeBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PracticeBankInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledTest
   */

  export type AggregateScheduledTest = {
    _count: ScheduledTestCountAggregateOutputType | null
    _min: ScheduledTestMinAggregateOutputType | null
    _max: ScheduledTestMaxAggregateOutputType | null
  }

  export type ScheduledTestMinAggregateOutputType = {
    id: string | null
    practiceBankId: string | null
    studentId: string | null
    scheduledDate: Date | null
    dueDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduledTestMaxAggregateOutputType = {
    id: string | null
    practiceBankId: string | null
    studentId: string | null
    scheduledDate: Date | null
    dueDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduledTestCountAggregateOutputType = {
    id: number
    practiceBankId: number
    studentId: number
    scheduledDate: number
    dueDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduledTestMinAggregateInputType = {
    id?: true
    practiceBankId?: true
    studentId?: true
    scheduledDate?: true
    dueDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduledTestMaxAggregateInputType = {
    id?: true
    practiceBankId?: true
    studentId?: true
    scheduledDate?: true
    dueDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduledTestCountAggregateInputType = {
    id?: true
    practiceBankId?: true
    studentId?: true
    scheduledDate?: true
    dueDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduledTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledTest to aggregate.
     */
    where?: ScheduledTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTests to fetch.
     */
    orderBy?: ScheduledTestOrderByWithRelationInput | ScheduledTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledTests
    **/
    _count?: true | ScheduledTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledTestMaxAggregateInputType
  }

  export type GetScheduledTestAggregateType<T extends ScheduledTestAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledTest[P]>
      : GetScalarType<T[P], AggregateScheduledTest[P]>
  }




  export type ScheduledTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledTestWhereInput
    orderBy?: ScheduledTestOrderByWithAggregationInput | ScheduledTestOrderByWithAggregationInput[]
    by: ScheduledTestScalarFieldEnum[] | ScheduledTestScalarFieldEnum
    having?: ScheduledTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledTestCountAggregateInputType | true
    _min?: ScheduledTestMinAggregateInputType
    _max?: ScheduledTestMaxAggregateInputType
  }

  export type ScheduledTestGroupByOutputType = {
    id: string
    practiceBankId: string
    studentId: string
    scheduledDate: Date
    dueDate: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduledTestCountAggregateOutputType | null
    _min: ScheduledTestMinAggregateOutputType | null
    _max: ScheduledTestMaxAggregateOutputType | null
  }

  type GetScheduledTestGroupByPayload<T extends ScheduledTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledTestGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledTestGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceBankId?: boolean
    studentId?: boolean
    scheduledDate?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    practiceBank?: boolean | PracticeBankDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | ScheduledTest$submissionsArgs<ExtArgs>
    answers?: boolean | ScheduledTest$answersArgs<ExtArgs>
    _count?: boolean | ScheduledTestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledTest"]>



  export type ScheduledTestSelectScalar = {
    id?: boolean
    practiceBankId?: boolean
    studentId?: boolean
    scheduledDate?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduledTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "practiceBankId" | "studentId" | "scheduledDate" | "dueDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduledTest"]>
  export type ScheduledTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceBank?: boolean | PracticeBankDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | ScheduledTest$submissionsArgs<ExtArgs>
    answers?: boolean | ScheduledTest$answersArgs<ExtArgs>
    _count?: boolean | ScheduledTestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScheduledTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledTest"
    objects: {
      practiceBank: Prisma.$PracticeBankPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$TestSubmissionPayload<ExtArgs>[]
      answers: Prisma.$StudentAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      practiceBankId: string
      studentId: string
      scheduledDate: Date
      dueDate: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduledTest"]>
    composites: {}
  }

  type ScheduledTestGetPayload<S extends boolean | null | undefined | ScheduledTestDefaultArgs> = $Result.GetResult<Prisma.$ScheduledTestPayload, S>

  type ScheduledTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledTestCountAggregateInputType | true
    }

  export interface ScheduledTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledTest'], meta: { name: 'ScheduledTest' } }
    /**
     * Find zero or one ScheduledTest that matches the filter.
     * @param {ScheduledTestFindUniqueArgs} args - Arguments to find a ScheduledTest
     * @example
     * // Get one ScheduledTest
     * const scheduledTest = await prisma.scheduledTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledTestFindUniqueArgs>(args: SelectSubset<T, ScheduledTestFindUniqueArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledTestFindUniqueOrThrowArgs} args - Arguments to find a ScheduledTest
     * @example
     * // Get one ScheduledTest
     * const scheduledTest = await prisma.scheduledTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledTestFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTestFindFirstArgs} args - Arguments to find a ScheduledTest
     * @example
     * // Get one ScheduledTest
     * const scheduledTest = await prisma.scheduledTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledTestFindFirstArgs>(args?: SelectSubset<T, ScheduledTestFindFirstArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTestFindFirstOrThrowArgs} args - Arguments to find a ScheduledTest
     * @example
     * // Get one ScheduledTest
     * const scheduledTest = await prisma.scheduledTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledTestFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledTests
     * const scheduledTests = await prisma.scheduledTest.findMany()
     * 
     * // Get first 10 ScheduledTests
     * const scheduledTests = await prisma.scheduledTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledTestWithIdOnly = await prisma.scheduledTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledTestFindManyArgs>(args?: SelectSubset<T, ScheduledTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledTest.
     * @param {ScheduledTestCreateArgs} args - Arguments to create a ScheduledTest.
     * @example
     * // Create one ScheduledTest
     * const ScheduledTest = await prisma.scheduledTest.create({
     *   data: {
     *     // ... data to create a ScheduledTest
     *   }
     * })
     * 
     */
    create<T extends ScheduledTestCreateArgs>(args: SelectSubset<T, ScheduledTestCreateArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledTests.
     * @param {ScheduledTestCreateManyArgs} args - Arguments to create many ScheduledTests.
     * @example
     * // Create many ScheduledTests
     * const scheduledTest = await prisma.scheduledTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledTestCreateManyArgs>(args?: SelectSubset<T, ScheduledTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScheduledTest.
     * @param {ScheduledTestDeleteArgs} args - Arguments to delete one ScheduledTest.
     * @example
     * // Delete one ScheduledTest
     * const ScheduledTest = await prisma.scheduledTest.delete({
     *   where: {
     *     // ... filter to delete one ScheduledTest
     *   }
     * })
     * 
     */
    delete<T extends ScheduledTestDeleteArgs>(args: SelectSubset<T, ScheduledTestDeleteArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledTest.
     * @param {ScheduledTestUpdateArgs} args - Arguments to update one ScheduledTest.
     * @example
     * // Update one ScheduledTest
     * const scheduledTest = await prisma.scheduledTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledTestUpdateArgs>(args: SelectSubset<T, ScheduledTestUpdateArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledTests.
     * @param {ScheduledTestDeleteManyArgs} args - Arguments to filter ScheduledTests to delete.
     * @example
     * // Delete a few ScheduledTests
     * const { count } = await prisma.scheduledTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledTestDeleteManyArgs>(args?: SelectSubset<T, ScheduledTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledTests
     * const scheduledTest = await prisma.scheduledTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledTestUpdateManyArgs>(args: SelectSubset<T, ScheduledTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduledTest.
     * @param {ScheduledTestUpsertArgs} args - Arguments to update or create a ScheduledTest.
     * @example
     * // Update or create a ScheduledTest
     * const scheduledTest = await prisma.scheduledTest.upsert({
     *   create: {
     *     // ... data to create a ScheduledTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledTest we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledTestUpsertArgs>(args: SelectSubset<T, ScheduledTestUpsertArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTestCountArgs} args - Arguments to filter ScheduledTests to count.
     * @example
     * // Count the number of ScheduledTests
     * const count = await prisma.scheduledTest.count({
     *   where: {
     *     // ... the filter for the ScheduledTests we want to count
     *   }
     * })
    **/
    count<T extends ScheduledTestCountArgs>(
      args?: Subset<T, ScheduledTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduledTestAggregateArgs>(args: Subset<T, ScheduledTestAggregateArgs>): Prisma.PrismaPromise<GetScheduledTestAggregateType<T>>

    /**
     * Group by ScheduledTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledTestGroupByArgs} args - Group by arguments.
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
      T extends ScheduledTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledTestGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduledTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledTest model
   */
  readonly fields: ScheduledTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    practiceBank<T extends PracticeBankDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PracticeBankDefaultArgs<ExtArgs>>): Prisma__PracticeBankClient<$Result.GetResult<Prisma.$PracticeBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends ScheduledTest$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledTest$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends ScheduledTest$answersArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledTest$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ScheduledTest model
   */
  interface ScheduledTestFieldRefs {
    readonly id: FieldRef<"ScheduledTest", 'String'>
    readonly practiceBankId: FieldRef<"ScheduledTest", 'String'>
    readonly studentId: FieldRef<"ScheduledTest", 'String'>
    readonly scheduledDate: FieldRef<"ScheduledTest", 'DateTime'>
    readonly dueDate: FieldRef<"ScheduledTest", 'DateTime'>
    readonly status: FieldRef<"ScheduledTest", 'String'>
    readonly createdAt: FieldRef<"ScheduledTest", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduledTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledTest findUnique
   */
  export type ScheduledTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledTest to fetch.
     */
    where: ScheduledTestWhereUniqueInput
  }

  /**
   * ScheduledTest findUniqueOrThrow
   */
  export type ScheduledTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledTest to fetch.
     */
    where: ScheduledTestWhereUniqueInput
  }

  /**
   * ScheduledTest findFirst
   */
  export type ScheduledTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledTest to fetch.
     */
    where?: ScheduledTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTests to fetch.
     */
    orderBy?: ScheduledTestOrderByWithRelationInput | ScheduledTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledTests.
     */
    cursor?: ScheduledTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledTests.
     */
    distinct?: ScheduledTestScalarFieldEnum | ScheduledTestScalarFieldEnum[]
  }

  /**
   * ScheduledTest findFirstOrThrow
   */
  export type ScheduledTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledTest to fetch.
     */
    where?: ScheduledTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTests to fetch.
     */
    orderBy?: ScheduledTestOrderByWithRelationInput | ScheduledTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledTests.
     */
    cursor?: ScheduledTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledTests.
     */
    distinct?: ScheduledTestScalarFieldEnum | ScheduledTestScalarFieldEnum[]
  }

  /**
   * ScheduledTest findMany
   */
  export type ScheduledTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledTests to fetch.
     */
    where?: ScheduledTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledTests to fetch.
     */
    orderBy?: ScheduledTestOrderByWithRelationInput | ScheduledTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledTests.
     */
    cursor?: ScheduledTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledTests.
     */
    skip?: number
    distinct?: ScheduledTestScalarFieldEnum | ScheduledTestScalarFieldEnum[]
  }

  /**
   * ScheduledTest create
   */
  export type ScheduledTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledTest.
     */
    data: XOR<ScheduledTestCreateInput, ScheduledTestUncheckedCreateInput>
  }

  /**
   * ScheduledTest createMany
   */
  export type ScheduledTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledTests.
     */
    data: ScheduledTestCreateManyInput | ScheduledTestCreateManyInput[]
  }

  /**
   * ScheduledTest update
   */
  export type ScheduledTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledTest.
     */
    data: XOR<ScheduledTestUpdateInput, ScheduledTestUncheckedUpdateInput>
    /**
     * Choose, which ScheduledTest to update.
     */
    where: ScheduledTestWhereUniqueInput
  }

  /**
   * ScheduledTest updateMany
   */
  export type ScheduledTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledTests.
     */
    data: XOR<ScheduledTestUpdateManyMutationInput, ScheduledTestUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledTests to update
     */
    where?: ScheduledTestWhereInput
    /**
     * Limit how many ScheduledTests to update.
     */
    limit?: number
  }

  /**
   * ScheduledTest upsert
   */
  export type ScheduledTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledTest to update in case it exists.
     */
    where: ScheduledTestWhereUniqueInput
    /**
     * In case the ScheduledTest found by the `where` argument doesn't exist, create a new ScheduledTest with this data.
     */
    create: XOR<ScheduledTestCreateInput, ScheduledTestUncheckedCreateInput>
    /**
     * In case the ScheduledTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledTestUpdateInput, ScheduledTestUncheckedUpdateInput>
  }

  /**
   * ScheduledTest delete
   */
  export type ScheduledTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
    /**
     * Filter which ScheduledTest to delete.
     */
    where: ScheduledTestWhereUniqueInput
  }

  /**
   * ScheduledTest deleteMany
   */
  export type ScheduledTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledTests to delete
     */
    where?: ScheduledTestWhereInput
    /**
     * Limit how many ScheduledTests to delete.
     */
    limit?: number
  }

  /**
   * ScheduledTest.submissions
   */
  export type ScheduledTest$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    where?: TestSubmissionWhereInput
    orderBy?: TestSubmissionOrderByWithRelationInput | TestSubmissionOrderByWithRelationInput[]
    cursor?: TestSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestSubmissionScalarFieldEnum | TestSubmissionScalarFieldEnum[]
  }

  /**
   * ScheduledTest.answers
   */
  export type ScheduledTest$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    where?: StudentAnswerWhereInput
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    cursor?: StudentAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * ScheduledTest without action
   */
  export type ScheduledTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledTest
     */
    select?: ScheduledTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledTest
     */
    omit?: ScheduledTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledTestInclude<ExtArgs> | null
  }


  /**
   * Model StudentAnswer
   */

  export type AggregateStudentAnswer = {
    _count: StudentAnswerCountAggregateOutputType | null
    _min: StudentAnswerMinAggregateOutputType | null
    _max: StudentAnswerMaxAggregateOutputType | null
  }

  export type StudentAnswerMinAggregateOutputType = {
    id: string | null
    scheduledTestId: string | null
    questionId: string | null
    answerText: string | null
    isCorrect: boolean | null
    submittedAt: Date | null
  }

  export type StudentAnswerMaxAggregateOutputType = {
    id: string | null
    scheduledTestId: string | null
    questionId: string | null
    answerText: string | null
    isCorrect: boolean | null
    submittedAt: Date | null
  }

  export type StudentAnswerCountAggregateOutputType = {
    id: number
    scheduledTestId: number
    questionId: number
    answerText: number
    isCorrect: number
    submittedAt: number
    _all: number
  }


  export type StudentAnswerMinAggregateInputType = {
    id?: true
    scheduledTestId?: true
    questionId?: true
    answerText?: true
    isCorrect?: true
    submittedAt?: true
  }

  export type StudentAnswerMaxAggregateInputType = {
    id?: true
    scheduledTestId?: true
    questionId?: true
    answerText?: true
    isCorrect?: true
    submittedAt?: true
  }

  export type StudentAnswerCountAggregateInputType = {
    id?: true
    scheduledTestId?: true
    questionId?: true
    answerText?: true
    isCorrect?: true
    submittedAt?: true
    _all?: true
  }

  export type StudentAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAnswer to aggregate.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAnswers
    **/
    _count?: true | StudentAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAnswerMaxAggregateInputType
  }

  export type GetStudentAnswerAggregateType<T extends StudentAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAnswer[P]>
      : GetScalarType<T[P], AggregateStudentAnswer[P]>
  }




  export type StudentAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAnswerWhereInput
    orderBy?: StudentAnswerOrderByWithAggregationInput | StudentAnswerOrderByWithAggregationInput[]
    by: StudentAnswerScalarFieldEnum[] | StudentAnswerScalarFieldEnum
    having?: StudentAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAnswerCountAggregateInputType | true
    _min?: StudentAnswerMinAggregateInputType
    _max?: StudentAnswerMaxAggregateInputType
  }

  export type StudentAnswerGroupByOutputType = {
    id: string
    scheduledTestId: string
    questionId: string
    answerText: string
    isCorrect: boolean | null
    submittedAt: Date
    _count: StudentAnswerCountAggregateOutputType | null
    _min: StudentAnswerMinAggregateOutputType | null
    _max: StudentAnswerMaxAggregateOutputType | null
  }

  type GetStudentAnswerGroupByPayload<T extends StudentAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAnswerGroupByOutputType[P]>
        }
      >
    >


  export type StudentAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledTestId?: boolean
    questionId?: boolean
    answerText?: boolean
    isCorrect?: boolean
    submittedAt?: boolean
    scheduledTest?: boolean | ScheduledTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAnswer"]>



  export type StudentAnswerSelectScalar = {
    id?: boolean
    scheduledTestId?: boolean
    questionId?: boolean
    answerText?: boolean
    isCorrect?: boolean
    submittedAt?: boolean
  }

  export type StudentAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduledTestId" | "questionId" | "answerText" | "isCorrect" | "submittedAt", ExtArgs["result"]["studentAnswer"]>
  export type StudentAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledTest?: boolean | ScheduledTestDefaultArgs<ExtArgs>
  }

  export type $StudentAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAnswer"
    objects: {
      scheduledTest: Prisma.$ScheduledTestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scheduledTestId: string
      questionId: string
      answerText: string
      isCorrect: boolean | null
      submittedAt: Date
    }, ExtArgs["result"]["studentAnswer"]>
    composites: {}
  }

  type StudentAnswerGetPayload<S extends boolean | null | undefined | StudentAnswerDefaultArgs> = $Result.GetResult<Prisma.$StudentAnswerPayload, S>

  type StudentAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAnswerCountAggregateInputType | true
    }

  export interface StudentAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAnswer'], meta: { name: 'StudentAnswer' } }
    /**
     * Find zero or one StudentAnswer that matches the filter.
     * @param {StudentAnswerFindUniqueArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAnswerFindUniqueArgs>(args: SelectSubset<T, StudentAnswerFindUniqueArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAnswerFindUniqueOrThrowArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerFindFirstArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAnswerFindFirstArgs>(args?: SelectSubset<T, StudentAnswerFindFirstArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerFindFirstOrThrowArgs} args - Arguments to find a StudentAnswer
     * @example
     * // Get one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAnswers
     * const studentAnswers = await prisma.studentAnswer.findMany()
     * 
     * // Get first 10 StudentAnswers
     * const studentAnswers = await prisma.studentAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAnswerWithIdOnly = await prisma.studentAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAnswerFindManyArgs>(args?: SelectSubset<T, StudentAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAnswer.
     * @param {StudentAnswerCreateArgs} args - Arguments to create a StudentAnswer.
     * @example
     * // Create one StudentAnswer
     * const StudentAnswer = await prisma.studentAnswer.create({
     *   data: {
     *     // ... data to create a StudentAnswer
     *   }
     * })
     * 
     */
    create<T extends StudentAnswerCreateArgs>(args: SelectSubset<T, StudentAnswerCreateArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAnswers.
     * @param {StudentAnswerCreateManyArgs} args - Arguments to create many StudentAnswers.
     * @example
     * // Create many StudentAnswers
     * const studentAnswer = await prisma.studentAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAnswerCreateManyArgs>(args?: SelectSubset<T, StudentAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentAnswer.
     * @param {StudentAnswerDeleteArgs} args - Arguments to delete one StudentAnswer.
     * @example
     * // Delete one StudentAnswer
     * const StudentAnswer = await prisma.studentAnswer.delete({
     *   where: {
     *     // ... filter to delete one StudentAnswer
     *   }
     * })
     * 
     */
    delete<T extends StudentAnswerDeleteArgs>(args: SelectSubset<T, StudentAnswerDeleteArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAnswer.
     * @param {StudentAnswerUpdateArgs} args - Arguments to update one StudentAnswer.
     * @example
     * // Update one StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAnswerUpdateArgs>(args: SelectSubset<T, StudentAnswerUpdateArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAnswers.
     * @param {StudentAnswerDeleteManyArgs} args - Arguments to filter StudentAnswers to delete.
     * @example
     * // Delete a few StudentAnswers
     * const { count } = await prisma.studentAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAnswerDeleteManyArgs>(args?: SelectSubset<T, StudentAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAnswers
     * const studentAnswer = await prisma.studentAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAnswerUpdateManyArgs>(args: SelectSubset<T, StudentAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentAnswer.
     * @param {StudentAnswerUpsertArgs} args - Arguments to update or create a StudentAnswer.
     * @example
     * // Update or create a StudentAnswer
     * const studentAnswer = await prisma.studentAnswer.upsert({
     *   create: {
     *     // ... data to create a StudentAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAnswer we want to update
     *   }
     * })
     */
    upsert<T extends StudentAnswerUpsertArgs>(args: SelectSubset<T, StudentAnswerUpsertArgs<ExtArgs>>): Prisma__StudentAnswerClient<$Result.GetResult<Prisma.$StudentAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerCountArgs} args - Arguments to filter StudentAnswers to count.
     * @example
     * // Count the number of StudentAnswers
     * const count = await prisma.studentAnswer.count({
     *   where: {
     *     // ... the filter for the StudentAnswers we want to count
     *   }
     * })
    **/
    count<T extends StudentAnswerCountArgs>(
      args?: Subset<T, StudentAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAnswerAggregateArgs>(args: Subset<T, StudentAnswerAggregateArgs>): Prisma.PrismaPromise<GetStudentAnswerAggregateType<T>>

    /**
     * Group by StudentAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAnswerGroupByArgs} args - Group by arguments.
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
      T extends StudentAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAnswerGroupByArgs['orderBy'] }
        : { orderBy?: StudentAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAnswer model
   */
  readonly fields: StudentAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduledTest<T extends ScheduledTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledTestDefaultArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentAnswer model
   */
  interface StudentAnswerFieldRefs {
    readonly id: FieldRef<"StudentAnswer", 'String'>
    readonly scheduledTestId: FieldRef<"StudentAnswer", 'String'>
    readonly questionId: FieldRef<"StudentAnswer", 'String'>
    readonly answerText: FieldRef<"StudentAnswer", 'String'>
    readonly isCorrect: FieldRef<"StudentAnswer", 'Boolean'>
    readonly submittedAt: FieldRef<"StudentAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentAnswer findUnique
   */
  export type StudentAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer findUniqueOrThrow
   */
  export type StudentAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer findFirst
   */
  export type StudentAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAnswers.
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAnswers.
     */
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * StudentAnswer findFirstOrThrow
   */
  export type StudentAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswer to fetch.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAnswers.
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAnswers.
     */
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * StudentAnswer findMany
   */
  export type StudentAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which StudentAnswers to fetch.
     */
    where?: StudentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAnswers to fetch.
     */
    orderBy?: StudentAnswerOrderByWithRelationInput | StudentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAnswers.
     */
    cursor?: StudentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAnswers.
     */
    skip?: number
    distinct?: StudentAnswerScalarFieldEnum | StudentAnswerScalarFieldEnum[]
  }

  /**
   * StudentAnswer create
   */
  export type StudentAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAnswer.
     */
    data: XOR<StudentAnswerCreateInput, StudentAnswerUncheckedCreateInput>
  }

  /**
   * StudentAnswer createMany
   */
  export type StudentAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAnswers.
     */
    data: StudentAnswerCreateManyInput | StudentAnswerCreateManyInput[]
  }

  /**
   * StudentAnswer update
   */
  export type StudentAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAnswer.
     */
    data: XOR<StudentAnswerUpdateInput, StudentAnswerUncheckedUpdateInput>
    /**
     * Choose, which StudentAnswer to update.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer updateMany
   */
  export type StudentAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAnswers.
     */
    data: XOR<StudentAnswerUpdateManyMutationInput, StudentAnswerUncheckedUpdateManyInput>
    /**
     * Filter which StudentAnswers to update
     */
    where?: StudentAnswerWhereInput
    /**
     * Limit how many StudentAnswers to update.
     */
    limit?: number
  }

  /**
   * StudentAnswer upsert
   */
  export type StudentAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAnswer to update in case it exists.
     */
    where: StudentAnswerWhereUniqueInput
    /**
     * In case the StudentAnswer found by the `where` argument doesn't exist, create a new StudentAnswer with this data.
     */
    create: XOR<StudentAnswerCreateInput, StudentAnswerUncheckedCreateInput>
    /**
     * In case the StudentAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAnswerUpdateInput, StudentAnswerUncheckedUpdateInput>
  }

  /**
   * StudentAnswer delete
   */
  export type StudentAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
    /**
     * Filter which StudentAnswer to delete.
     */
    where: StudentAnswerWhereUniqueInput
  }

  /**
   * StudentAnswer deleteMany
   */
  export type StudentAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAnswers to delete
     */
    where?: StudentAnswerWhereInput
    /**
     * Limit how many StudentAnswers to delete.
     */
    limit?: number
  }

  /**
   * StudentAnswer without action
   */
  export type StudentAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAnswer
     */
    select?: StudentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAnswer
     */
    omit?: StudentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAnswerInclude<ExtArgs> | null
  }


  /**
   * Model TestSubmission
   */

  export type AggregateTestSubmission = {
    _count: TestSubmissionCountAggregateOutputType | null
    _avg: TestSubmissionAvgAggregateOutputType | null
    _sum: TestSubmissionSumAggregateOutputType | null
    _min: TestSubmissionMinAggregateOutputType | null
    _max: TestSubmissionMaxAggregateOutputType | null
  }

  export type TestSubmissionAvgAggregateOutputType = {
    score: number | null
  }

  export type TestSubmissionSumAggregateOutputType = {
    score: number | null
  }

  export type TestSubmissionMinAggregateOutputType = {
    id: string | null
    scheduledTestId: string | null
    studentId: string | null
    submittedAt: Date | null
    reviewedAt: Date | null
    reviewedBy: string | null
    autoReviewed: boolean | null
    answersReleased: boolean | null
    score: number | null
    feedback: string | null
  }

  export type TestSubmissionMaxAggregateOutputType = {
    id: string | null
    scheduledTestId: string | null
    studentId: string | null
    submittedAt: Date | null
    reviewedAt: Date | null
    reviewedBy: string | null
    autoReviewed: boolean | null
    answersReleased: boolean | null
    score: number | null
    feedback: string | null
  }

  export type TestSubmissionCountAggregateOutputType = {
    id: number
    scheduledTestId: number
    studentId: number
    submittedAt: number
    reviewedAt: number
    reviewedBy: number
    autoReviewed: number
    answersReleased: number
    score: number
    feedback: number
    _all: number
  }


  export type TestSubmissionAvgAggregateInputType = {
    score?: true
  }

  export type TestSubmissionSumAggregateInputType = {
    score?: true
  }

  export type TestSubmissionMinAggregateInputType = {
    id?: true
    scheduledTestId?: true
    studentId?: true
    submittedAt?: true
    reviewedAt?: true
    reviewedBy?: true
    autoReviewed?: true
    answersReleased?: true
    score?: true
    feedback?: true
  }

  export type TestSubmissionMaxAggregateInputType = {
    id?: true
    scheduledTestId?: true
    studentId?: true
    submittedAt?: true
    reviewedAt?: true
    reviewedBy?: true
    autoReviewed?: true
    answersReleased?: true
    score?: true
    feedback?: true
  }

  export type TestSubmissionCountAggregateInputType = {
    id?: true
    scheduledTestId?: true
    studentId?: true
    submittedAt?: true
    reviewedAt?: true
    reviewedBy?: true
    autoReviewed?: true
    answersReleased?: true
    score?: true
    feedback?: true
    _all?: true
  }

  export type TestSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestSubmission to aggregate.
     */
    where?: TestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSubmissions to fetch.
     */
    orderBy?: TestSubmissionOrderByWithRelationInput | TestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestSubmissions
    **/
    _count?: true | TestSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestSubmissionMaxAggregateInputType
  }

  export type GetTestSubmissionAggregateType<T extends TestSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateTestSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestSubmission[P]>
      : GetScalarType<T[P], AggregateTestSubmission[P]>
  }




  export type TestSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestSubmissionWhereInput
    orderBy?: TestSubmissionOrderByWithAggregationInput | TestSubmissionOrderByWithAggregationInput[]
    by: TestSubmissionScalarFieldEnum[] | TestSubmissionScalarFieldEnum
    having?: TestSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestSubmissionCountAggregateInputType | true
    _avg?: TestSubmissionAvgAggregateInputType
    _sum?: TestSubmissionSumAggregateInputType
    _min?: TestSubmissionMinAggregateInputType
    _max?: TestSubmissionMaxAggregateInputType
  }

  export type TestSubmissionGroupByOutputType = {
    id: string
    scheduledTestId: string
    studentId: string
    submittedAt: Date
    reviewedAt: Date | null
    reviewedBy: string | null
    autoReviewed: boolean
    answersReleased: boolean
    score: number | null
    feedback: string | null
    _count: TestSubmissionCountAggregateOutputType | null
    _avg: TestSubmissionAvgAggregateOutputType | null
    _sum: TestSubmissionSumAggregateOutputType | null
    _min: TestSubmissionMinAggregateOutputType | null
    _max: TestSubmissionMaxAggregateOutputType | null
  }

  type GetTestSubmissionGroupByPayload<T extends TestSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], TestSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type TestSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledTestId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: boolean
    feedback?: boolean
    scheduledTest?: boolean | ScheduledTestDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testSubmission"]>



  export type TestSubmissionSelectScalar = {
    id?: boolean
    scheduledTestId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: boolean
    feedback?: boolean
  }

  export type TestSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduledTestId" | "studentId" | "submittedAt" | "reviewedAt" | "reviewedBy" | "autoReviewed" | "answersReleased" | "score" | "feedback", ExtArgs["result"]["testSubmission"]>
  export type TestSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledTest?: boolean | ScheduledTestDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestSubmission"
    objects: {
      scheduledTest: Prisma.$ScheduledTestPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scheduledTestId: string
      studentId: string
      submittedAt: Date
      reviewedAt: Date | null
      reviewedBy: string | null
      autoReviewed: boolean
      answersReleased: boolean
      score: number | null
      feedback: string | null
    }, ExtArgs["result"]["testSubmission"]>
    composites: {}
  }

  type TestSubmissionGetPayload<S extends boolean | null | undefined | TestSubmissionDefaultArgs> = $Result.GetResult<Prisma.$TestSubmissionPayload, S>

  type TestSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestSubmissionCountAggregateInputType | true
    }

  export interface TestSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestSubmission'], meta: { name: 'TestSubmission' } }
    /**
     * Find zero or one TestSubmission that matches the filter.
     * @param {TestSubmissionFindUniqueArgs} args - Arguments to find a TestSubmission
     * @example
     * // Get one TestSubmission
     * const testSubmission = await prisma.testSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestSubmissionFindUniqueArgs>(args: SelectSubset<T, TestSubmissionFindUniqueArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestSubmissionFindUniqueOrThrowArgs} args - Arguments to find a TestSubmission
     * @example
     * // Get one TestSubmission
     * const testSubmission = await prisma.testSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, TestSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSubmissionFindFirstArgs} args - Arguments to find a TestSubmission
     * @example
     * // Get one TestSubmission
     * const testSubmission = await prisma.testSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestSubmissionFindFirstArgs>(args?: SelectSubset<T, TestSubmissionFindFirstArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSubmissionFindFirstOrThrowArgs} args - Arguments to find a TestSubmission
     * @example
     * // Get one TestSubmission
     * const testSubmission = await prisma.testSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, TestSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestSubmissions
     * const testSubmissions = await prisma.testSubmission.findMany()
     * 
     * // Get first 10 TestSubmissions
     * const testSubmissions = await prisma.testSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testSubmissionWithIdOnly = await prisma.testSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestSubmissionFindManyArgs>(args?: SelectSubset<T, TestSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestSubmission.
     * @param {TestSubmissionCreateArgs} args - Arguments to create a TestSubmission.
     * @example
     * // Create one TestSubmission
     * const TestSubmission = await prisma.testSubmission.create({
     *   data: {
     *     // ... data to create a TestSubmission
     *   }
     * })
     * 
     */
    create<T extends TestSubmissionCreateArgs>(args: SelectSubset<T, TestSubmissionCreateArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestSubmissions.
     * @param {TestSubmissionCreateManyArgs} args - Arguments to create many TestSubmissions.
     * @example
     * // Create many TestSubmissions
     * const testSubmission = await prisma.testSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestSubmissionCreateManyArgs>(args?: SelectSubset<T, TestSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestSubmission.
     * @param {TestSubmissionDeleteArgs} args - Arguments to delete one TestSubmission.
     * @example
     * // Delete one TestSubmission
     * const TestSubmission = await prisma.testSubmission.delete({
     *   where: {
     *     // ... filter to delete one TestSubmission
     *   }
     * })
     * 
     */
    delete<T extends TestSubmissionDeleteArgs>(args: SelectSubset<T, TestSubmissionDeleteArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestSubmission.
     * @param {TestSubmissionUpdateArgs} args - Arguments to update one TestSubmission.
     * @example
     * // Update one TestSubmission
     * const testSubmission = await prisma.testSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestSubmissionUpdateArgs>(args: SelectSubset<T, TestSubmissionUpdateArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestSubmissions.
     * @param {TestSubmissionDeleteManyArgs} args - Arguments to filter TestSubmissions to delete.
     * @example
     * // Delete a few TestSubmissions
     * const { count } = await prisma.testSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestSubmissionDeleteManyArgs>(args?: SelectSubset<T, TestSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestSubmissions
     * const testSubmission = await prisma.testSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestSubmissionUpdateManyArgs>(args: SelectSubset<T, TestSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestSubmission.
     * @param {TestSubmissionUpsertArgs} args - Arguments to update or create a TestSubmission.
     * @example
     * // Update or create a TestSubmission
     * const testSubmission = await prisma.testSubmission.upsert({
     *   create: {
     *     // ... data to create a TestSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestSubmission we want to update
     *   }
     * })
     */
    upsert<T extends TestSubmissionUpsertArgs>(args: SelectSubset<T, TestSubmissionUpsertArgs<ExtArgs>>): Prisma__TestSubmissionClient<$Result.GetResult<Prisma.$TestSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSubmissionCountArgs} args - Arguments to filter TestSubmissions to count.
     * @example
     * // Count the number of TestSubmissions
     * const count = await prisma.testSubmission.count({
     *   where: {
     *     // ... the filter for the TestSubmissions we want to count
     *   }
     * })
    **/
    count<T extends TestSubmissionCountArgs>(
      args?: Subset<T, TestSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestSubmissionAggregateArgs>(args: Subset<T, TestSubmissionAggregateArgs>): Prisma.PrismaPromise<GetTestSubmissionAggregateType<T>>

    /**
     * Group by TestSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestSubmissionGroupByArgs} args - Group by arguments.
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
      T extends TestSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: TestSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestSubmission model
   */
  readonly fields: TestSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduledTest<T extends ScheduledTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduledTestDefaultArgs<ExtArgs>>): Prisma__ScheduledTestClient<$Result.GetResult<Prisma.$ScheduledTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestSubmission model
   */
  interface TestSubmissionFieldRefs {
    readonly id: FieldRef<"TestSubmission", 'String'>
    readonly scheduledTestId: FieldRef<"TestSubmission", 'String'>
    readonly studentId: FieldRef<"TestSubmission", 'String'>
    readonly submittedAt: FieldRef<"TestSubmission", 'DateTime'>
    readonly reviewedAt: FieldRef<"TestSubmission", 'DateTime'>
    readonly reviewedBy: FieldRef<"TestSubmission", 'String'>
    readonly autoReviewed: FieldRef<"TestSubmission", 'Boolean'>
    readonly answersReleased: FieldRef<"TestSubmission", 'Boolean'>
    readonly score: FieldRef<"TestSubmission", 'Float'>
    readonly feedback: FieldRef<"TestSubmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestSubmission findUnique
   */
  export type TestSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TestSubmission to fetch.
     */
    where: TestSubmissionWhereUniqueInput
  }

  /**
   * TestSubmission findUniqueOrThrow
   */
  export type TestSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TestSubmission to fetch.
     */
    where: TestSubmissionWhereUniqueInput
  }

  /**
   * TestSubmission findFirst
   */
  export type TestSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TestSubmission to fetch.
     */
    where?: TestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSubmissions to fetch.
     */
    orderBy?: TestSubmissionOrderByWithRelationInput | TestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestSubmissions.
     */
    cursor?: TestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestSubmissions.
     */
    distinct?: TestSubmissionScalarFieldEnum | TestSubmissionScalarFieldEnum[]
  }

  /**
   * TestSubmission findFirstOrThrow
   */
  export type TestSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TestSubmission to fetch.
     */
    where?: TestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSubmissions to fetch.
     */
    orderBy?: TestSubmissionOrderByWithRelationInput | TestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestSubmissions.
     */
    cursor?: TestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestSubmissions.
     */
    distinct?: TestSubmissionScalarFieldEnum | TestSubmissionScalarFieldEnum[]
  }

  /**
   * TestSubmission findMany
   */
  export type TestSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TestSubmissions to fetch.
     */
    where?: TestSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestSubmissions to fetch.
     */
    orderBy?: TestSubmissionOrderByWithRelationInput | TestSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestSubmissions.
     */
    cursor?: TestSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestSubmissions.
     */
    skip?: number
    distinct?: TestSubmissionScalarFieldEnum | TestSubmissionScalarFieldEnum[]
  }

  /**
   * TestSubmission create
   */
  export type TestSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a TestSubmission.
     */
    data: XOR<TestSubmissionCreateInput, TestSubmissionUncheckedCreateInput>
  }

  /**
   * TestSubmission createMany
   */
  export type TestSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestSubmissions.
     */
    data: TestSubmissionCreateManyInput | TestSubmissionCreateManyInput[]
  }

  /**
   * TestSubmission update
   */
  export type TestSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a TestSubmission.
     */
    data: XOR<TestSubmissionUpdateInput, TestSubmissionUncheckedUpdateInput>
    /**
     * Choose, which TestSubmission to update.
     */
    where: TestSubmissionWhereUniqueInput
  }

  /**
   * TestSubmission updateMany
   */
  export type TestSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestSubmissions.
     */
    data: XOR<TestSubmissionUpdateManyMutationInput, TestSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which TestSubmissions to update
     */
    where?: TestSubmissionWhereInput
    /**
     * Limit how many TestSubmissions to update.
     */
    limit?: number
  }

  /**
   * TestSubmission upsert
   */
  export type TestSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the TestSubmission to update in case it exists.
     */
    where: TestSubmissionWhereUniqueInput
    /**
     * In case the TestSubmission found by the `where` argument doesn't exist, create a new TestSubmission with this data.
     */
    create: XOR<TestSubmissionCreateInput, TestSubmissionUncheckedCreateInput>
    /**
     * In case the TestSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestSubmissionUpdateInput, TestSubmissionUncheckedUpdateInput>
  }

  /**
   * TestSubmission delete
   */
  export type TestSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
    /**
     * Filter which TestSubmission to delete.
     */
    where: TestSubmissionWhereUniqueInput
  }

  /**
   * TestSubmission deleteMany
   */
  export type TestSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestSubmissions to delete
     */
    where?: TestSubmissionWhereInput
    /**
     * Limit how many TestSubmissions to delete.
     */
    limit?: number
  }

  /**
   * TestSubmission without action
   */
  export type TestSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestSubmission
     */
    select?: TestSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestSubmission
     */
    omit?: TestSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestSubmissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PracticeBankScalarFieldEnum: {
    id: 'id',
    title: 'title',
    businessDomain: 'businessDomain',
    category: 'category',
    focusAreas: 'focusAreas',
    questions: 'questions',
    answers: 'answers',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PracticeBankScalarFieldEnum = (typeof PracticeBankScalarFieldEnum)[keyof typeof PracticeBankScalarFieldEnum]


  export const ScheduledTestScalarFieldEnum: {
    id: 'id',
    practiceBankId: 'practiceBankId',
    studentId: 'studentId',
    scheduledDate: 'scheduledDate',
    dueDate: 'dueDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduledTestScalarFieldEnum = (typeof ScheduledTestScalarFieldEnum)[keyof typeof ScheduledTestScalarFieldEnum]


  export const StudentAnswerScalarFieldEnum: {
    id: 'id',
    scheduledTestId: 'scheduledTestId',
    questionId: 'questionId',
    answerText: 'answerText',
    isCorrect: 'isCorrect',
    submittedAt: 'submittedAt'
  };

  export type StudentAnswerScalarFieldEnum = (typeof StudentAnswerScalarFieldEnum)[keyof typeof StudentAnswerScalarFieldEnum]


  export const TestSubmissionScalarFieldEnum: {
    id: 'id',
    scheduledTestId: 'scheduledTestId',
    studentId: 'studentId',
    submittedAt: 'submittedAt',
    reviewedAt: 'reviewedAt',
    reviewedBy: 'reviewedBy',
    autoReviewed: 'autoReviewed',
    answersReleased: 'answersReleased',
    score: 'score',
    feedback: 'feedback'
  };

  export type TestSubmissionScalarFieldEnum = (typeof TestSubmissionScalarFieldEnum)[keyof typeof TestSubmissionScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdPractices?: PracticeBankListRelationFilter
    scheduledTests?: ScheduledTestListRelationFilter
    submissions?: TestSubmissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdPractices?: PracticeBankOrderByRelationAggregateInput
    scheduledTests?: ScheduledTestOrderByRelationAggregateInput
    submissions?: TestSubmissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdPractices?: PracticeBankListRelationFilter
    scheduledTests?: ScheduledTestListRelationFilter
    submissions?: TestSubmissionListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PracticeBankWhereInput = {
    AND?: PracticeBankWhereInput | PracticeBankWhereInput[]
    OR?: PracticeBankWhereInput[]
    NOT?: PracticeBankWhereInput | PracticeBankWhereInput[]
    id?: StringFilter<"PracticeBank"> | string
    title?: StringFilter<"PracticeBank"> | string
    businessDomain?: StringFilter<"PracticeBank"> | string
    category?: StringFilter<"PracticeBank"> | string
    focusAreas?: StringFilter<"PracticeBank"> | string
    questions?: StringFilter<"PracticeBank"> | string
    answers?: StringFilter<"PracticeBank"> | string
    createdById?: StringFilter<"PracticeBank"> | string
    createdAt?: DateTimeFilter<"PracticeBank"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeBank"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledTests?: ScheduledTestListRelationFilter
  }

  export type PracticeBankOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    businessDomain?: SortOrder
    category?: SortOrder
    focusAreas?: SortOrder
    questions?: SortOrder
    answers?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    scheduledTests?: ScheduledTestOrderByRelationAggregateInput
  }

  export type PracticeBankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PracticeBankWhereInput | PracticeBankWhereInput[]
    OR?: PracticeBankWhereInput[]
    NOT?: PracticeBankWhereInput | PracticeBankWhereInput[]
    title?: StringFilter<"PracticeBank"> | string
    businessDomain?: StringFilter<"PracticeBank"> | string
    category?: StringFilter<"PracticeBank"> | string
    focusAreas?: StringFilter<"PracticeBank"> | string
    questions?: StringFilter<"PracticeBank"> | string
    answers?: StringFilter<"PracticeBank"> | string
    createdById?: StringFilter<"PracticeBank"> | string
    createdAt?: DateTimeFilter<"PracticeBank"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeBank"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledTests?: ScheduledTestListRelationFilter
  }, "id">

  export type PracticeBankOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    businessDomain?: SortOrder
    category?: SortOrder
    focusAreas?: SortOrder
    questions?: SortOrder
    answers?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PracticeBankCountOrderByAggregateInput
    _max?: PracticeBankMaxOrderByAggregateInput
    _min?: PracticeBankMinOrderByAggregateInput
  }

  export type PracticeBankScalarWhereWithAggregatesInput = {
    AND?: PracticeBankScalarWhereWithAggregatesInput | PracticeBankScalarWhereWithAggregatesInput[]
    OR?: PracticeBankScalarWhereWithAggregatesInput[]
    NOT?: PracticeBankScalarWhereWithAggregatesInput | PracticeBankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PracticeBank"> | string
    title?: StringWithAggregatesFilter<"PracticeBank"> | string
    businessDomain?: StringWithAggregatesFilter<"PracticeBank"> | string
    category?: StringWithAggregatesFilter<"PracticeBank"> | string
    focusAreas?: StringWithAggregatesFilter<"PracticeBank"> | string
    questions?: StringWithAggregatesFilter<"PracticeBank"> | string
    answers?: StringWithAggregatesFilter<"PracticeBank"> | string
    createdById?: StringWithAggregatesFilter<"PracticeBank"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PracticeBank"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PracticeBank"> | Date | string
  }

  export type ScheduledTestWhereInput = {
    AND?: ScheduledTestWhereInput | ScheduledTestWhereInput[]
    OR?: ScheduledTestWhereInput[]
    NOT?: ScheduledTestWhereInput | ScheduledTestWhereInput[]
    id?: StringFilter<"ScheduledTest"> | string
    practiceBankId?: StringFilter<"ScheduledTest"> | string
    studentId?: StringFilter<"ScheduledTest"> | string
    scheduledDate?: DateTimeFilter<"ScheduledTest"> | Date | string
    dueDate?: DateTimeNullableFilter<"ScheduledTest"> | Date | string | null
    status?: StringFilter<"ScheduledTest"> | string
    createdAt?: DateTimeFilter<"ScheduledTest"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledTest"> | Date | string
    practiceBank?: XOR<PracticeBankScalarRelationFilter, PracticeBankWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: TestSubmissionListRelationFilter
    answers?: StudentAnswerListRelationFilter
  }

  export type ScheduledTestOrderByWithRelationInput = {
    id?: SortOrder
    practiceBankId?: SortOrder
    studentId?: SortOrder
    scheduledDate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    practiceBank?: PracticeBankOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    submissions?: TestSubmissionOrderByRelationAggregateInput
    answers?: StudentAnswerOrderByRelationAggregateInput
  }

  export type ScheduledTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledTestWhereInput | ScheduledTestWhereInput[]
    OR?: ScheduledTestWhereInput[]
    NOT?: ScheduledTestWhereInput | ScheduledTestWhereInput[]
    practiceBankId?: StringFilter<"ScheduledTest"> | string
    studentId?: StringFilter<"ScheduledTest"> | string
    scheduledDate?: DateTimeFilter<"ScheduledTest"> | Date | string
    dueDate?: DateTimeNullableFilter<"ScheduledTest"> | Date | string | null
    status?: StringFilter<"ScheduledTest"> | string
    createdAt?: DateTimeFilter<"ScheduledTest"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledTest"> | Date | string
    practiceBank?: XOR<PracticeBankScalarRelationFilter, PracticeBankWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: TestSubmissionListRelationFilter
    answers?: StudentAnswerListRelationFilter
  }, "id">

  export type ScheduledTestOrderByWithAggregationInput = {
    id?: SortOrder
    practiceBankId?: SortOrder
    studentId?: SortOrder
    scheduledDate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduledTestCountOrderByAggregateInput
    _max?: ScheduledTestMaxOrderByAggregateInput
    _min?: ScheduledTestMinOrderByAggregateInput
  }

  export type ScheduledTestScalarWhereWithAggregatesInput = {
    AND?: ScheduledTestScalarWhereWithAggregatesInput | ScheduledTestScalarWhereWithAggregatesInput[]
    OR?: ScheduledTestScalarWhereWithAggregatesInput[]
    NOT?: ScheduledTestScalarWhereWithAggregatesInput | ScheduledTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledTest"> | string
    practiceBankId?: StringWithAggregatesFilter<"ScheduledTest"> | string
    studentId?: StringWithAggregatesFilter<"ScheduledTest"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"ScheduledTest"> | Date | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"ScheduledTest"> | Date | string | null
    status?: StringWithAggregatesFilter<"ScheduledTest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledTest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduledTest"> | Date | string
  }

  export type StudentAnswerWhereInput = {
    AND?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    OR?: StudentAnswerWhereInput[]
    NOT?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    id?: StringFilter<"StudentAnswer"> | string
    scheduledTestId?: StringFilter<"StudentAnswer"> | string
    questionId?: StringFilter<"StudentAnswer"> | string
    answerText?: StringFilter<"StudentAnswer"> | string
    isCorrect?: BoolNullableFilter<"StudentAnswer"> | boolean | null
    submittedAt?: DateTimeFilter<"StudentAnswer"> | Date | string
    scheduledTest?: XOR<ScheduledTestScalarRelationFilter, ScheduledTestWhereInput>
  }

  export type StudentAnswerOrderByWithRelationInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    scheduledTest?: ScheduledTestOrderByWithRelationInput
  }

  export type StudentAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scheduledTestId_questionId?: StudentAnswerScheduledTestIdQuestionIdCompoundUniqueInput
    AND?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    OR?: StudentAnswerWhereInput[]
    NOT?: StudentAnswerWhereInput | StudentAnswerWhereInput[]
    scheduledTestId?: StringFilter<"StudentAnswer"> | string
    questionId?: StringFilter<"StudentAnswer"> | string
    answerText?: StringFilter<"StudentAnswer"> | string
    isCorrect?: BoolNullableFilter<"StudentAnswer"> | boolean | null
    submittedAt?: DateTimeFilter<"StudentAnswer"> | Date | string
    scheduledTest?: XOR<ScheduledTestScalarRelationFilter, ScheduledTestWhereInput>
  }, "id" | "scheduledTestId_questionId">

  export type StudentAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    _count?: StudentAnswerCountOrderByAggregateInput
    _max?: StudentAnswerMaxOrderByAggregateInput
    _min?: StudentAnswerMinOrderByAggregateInput
  }

  export type StudentAnswerScalarWhereWithAggregatesInput = {
    AND?: StudentAnswerScalarWhereWithAggregatesInput | StudentAnswerScalarWhereWithAggregatesInput[]
    OR?: StudentAnswerScalarWhereWithAggregatesInput[]
    NOT?: StudentAnswerScalarWhereWithAggregatesInput | StudentAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAnswer"> | string
    scheduledTestId?: StringWithAggregatesFilter<"StudentAnswer"> | string
    questionId?: StringWithAggregatesFilter<"StudentAnswer"> | string
    answerText?: StringWithAggregatesFilter<"StudentAnswer"> | string
    isCorrect?: BoolNullableWithAggregatesFilter<"StudentAnswer"> | boolean | null
    submittedAt?: DateTimeWithAggregatesFilter<"StudentAnswer"> | Date | string
  }

  export type TestSubmissionWhereInput = {
    AND?: TestSubmissionWhereInput | TestSubmissionWhereInput[]
    OR?: TestSubmissionWhereInput[]
    NOT?: TestSubmissionWhereInput | TestSubmissionWhereInput[]
    id?: StringFilter<"TestSubmission"> | string
    scheduledTestId?: StringFilter<"TestSubmission"> | string
    studentId?: StringFilter<"TestSubmission"> | string
    submittedAt?: DateTimeFilter<"TestSubmission"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"TestSubmission"> | Date | string | null
    reviewedBy?: StringNullableFilter<"TestSubmission"> | string | null
    autoReviewed?: BoolFilter<"TestSubmission"> | boolean
    answersReleased?: BoolFilter<"TestSubmission"> | boolean
    score?: FloatNullableFilter<"TestSubmission"> | number | null
    feedback?: StringNullableFilter<"TestSubmission"> | string | null
    scheduledTest?: XOR<ScheduledTestScalarRelationFilter, ScheduledTestWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    autoReviewed?: SortOrder
    answersReleased?: SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    scheduledTest?: ScheduledTestOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type TestSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scheduledTestId?: string
    AND?: TestSubmissionWhereInput | TestSubmissionWhereInput[]
    OR?: TestSubmissionWhereInput[]
    NOT?: TestSubmissionWhereInput | TestSubmissionWhereInput[]
    studentId?: StringFilter<"TestSubmission"> | string
    submittedAt?: DateTimeFilter<"TestSubmission"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"TestSubmission"> | Date | string | null
    reviewedBy?: StringNullableFilter<"TestSubmission"> | string | null
    autoReviewed?: BoolFilter<"TestSubmission"> | boolean
    answersReleased?: BoolFilter<"TestSubmission"> | boolean
    score?: FloatNullableFilter<"TestSubmission"> | number | null
    feedback?: StringNullableFilter<"TestSubmission"> | string | null
    scheduledTest?: XOR<ScheduledTestScalarRelationFilter, ScheduledTestWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "scheduledTestId">

  export type TestSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    autoReviewed?: SortOrder
    answersReleased?: SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    _count?: TestSubmissionCountOrderByAggregateInput
    _avg?: TestSubmissionAvgOrderByAggregateInput
    _max?: TestSubmissionMaxOrderByAggregateInput
    _min?: TestSubmissionMinOrderByAggregateInput
    _sum?: TestSubmissionSumOrderByAggregateInput
  }

  export type TestSubmissionScalarWhereWithAggregatesInput = {
    AND?: TestSubmissionScalarWhereWithAggregatesInput | TestSubmissionScalarWhereWithAggregatesInput[]
    OR?: TestSubmissionScalarWhereWithAggregatesInput[]
    NOT?: TestSubmissionScalarWhereWithAggregatesInput | TestSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestSubmission"> | string
    scheduledTestId?: StringWithAggregatesFilter<"TestSubmission"> | string
    studentId?: StringWithAggregatesFilter<"TestSubmission"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"TestSubmission"> | Date | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"TestSubmission"> | Date | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"TestSubmission"> | string | null
    autoReviewed?: BoolWithAggregatesFilter<"TestSubmission"> | boolean
    answersReleased?: BoolWithAggregatesFilter<"TestSubmission"> | boolean
    score?: FloatNullableWithAggregatesFilter<"TestSubmission"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"TestSubmission"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdPractices?: PracticeBankCreateNestedManyWithoutCreatedByInput
    scheduledTests?: ScheduledTestCreateNestedManyWithoutStudentInput
    submissions?: TestSubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdPractices?: PracticeBankUncheckedCreateNestedManyWithoutCreatedByInput
    scheduledTests?: ScheduledTestUncheckedCreateNestedManyWithoutStudentInput
    submissions?: TestSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdPractices?: PracticeBankUpdateManyWithoutCreatedByNestedInput
    scheduledTests?: ScheduledTestUpdateManyWithoutStudentNestedInput
    submissions?: TestSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdPractices?: PracticeBankUncheckedUpdateManyWithoutCreatedByNestedInput
    scheduledTests?: ScheduledTestUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: TestSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeBankCreateInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedPracticesInput
    scheduledTests?: ScheduledTestCreateNestedManyWithoutPracticeBankInput
  }

  export type PracticeBankUncheckedCreateInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduledTests?: ScheduledTestUncheckedCreateNestedManyWithoutPracticeBankInput
  }

  export type PracticeBankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedPracticesNestedInput
    scheduledTests?: ScheduledTestUpdateManyWithoutPracticeBankNestedInput
  }

  export type PracticeBankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTests?: ScheduledTestUncheckedUpdateManyWithoutPracticeBankNestedInput
  }

  export type PracticeBankCreateManyInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeBankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeBankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledTestCreateInput = {
    id?: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceBank: PracticeBankCreateNestedOneWithoutScheduledTestsInput
    student: UserCreateNestedOneWithoutScheduledTestsInput
    submissions?: TestSubmissionCreateNestedManyWithoutScheduledTestInput
    answers?: StudentAnswerCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestUncheckedCreateInput = {
    id?: string
    practiceBankId: string
    studentId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: TestSubmissionUncheckedCreateNestedManyWithoutScheduledTestInput
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceBank?: PracticeBankUpdateOneRequiredWithoutScheduledTestsNestedInput
    student?: UserUpdateOneRequiredWithoutScheduledTestsNestedInput
    submissions?: TestSubmissionUpdateManyWithoutScheduledTestNestedInput
    answers?: StudentAnswerUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceBankId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TestSubmissionUncheckedUpdateManyWithoutScheduledTestNestedInput
    answers?: StudentAnswerUncheckedUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestCreateManyInput = {
    id?: string
    practiceBankId: string
    studentId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceBankId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnswerCreateInput = {
    id?: string
    questionId: string
    answerText: string
    isCorrect?: boolean | null
    submittedAt?: Date | string
    scheduledTest: ScheduledTestCreateNestedOneWithoutAnswersInput
  }

  export type StudentAnswerUncheckedCreateInput = {
    id?: string
    scheduledTestId: string
    questionId: string
    answerText: string
    isCorrect?: boolean | null
    submittedAt?: Date | string
  }

  export type StudentAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTest?: ScheduledTestUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type StudentAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTestId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnswerCreateManyInput = {
    id?: string
    scheduledTestId: string
    questionId: string
    answerText: string
    isCorrect?: boolean | null
    submittedAt?: Date | string
  }

  export type StudentAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTestId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestSubmissionCreateInput = {
    id?: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
    scheduledTest: ScheduledTestCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type TestSubmissionUncheckedCreateInput = {
    id?: string
    scheduledTestId: string
    studentId: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
  }

  export type TestSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledTest?: ScheduledTestUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type TestSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTestId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSubmissionCreateManyInput = {
    id?: string
    scheduledTestId: string
    studentId: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
  }

  export type TestSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTestId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type PracticeBankListRelationFilter = {
    every?: PracticeBankWhereInput
    some?: PracticeBankWhereInput
    none?: PracticeBankWhereInput
  }

  export type ScheduledTestListRelationFilter = {
    every?: ScheduledTestWhereInput
    some?: ScheduledTestWhereInput
    none?: ScheduledTestWhereInput
  }

  export type TestSubmissionListRelationFilter = {
    every?: TestSubmissionWhereInput
    some?: TestSubmissionWhereInput
    none?: TestSubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PracticeBankOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduledTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PracticeBankCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    businessDomain?: SortOrder
    category?: SortOrder
    focusAreas?: SortOrder
    questions?: SortOrder
    answers?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeBankMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    businessDomain?: SortOrder
    category?: SortOrder
    focusAreas?: SortOrder
    questions?: SortOrder
    answers?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PracticeBankMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    businessDomain?: SortOrder
    category?: SortOrder
    focusAreas?: SortOrder
    questions?: SortOrder
    answers?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PracticeBankScalarRelationFilter = {
    is?: PracticeBankWhereInput
    isNot?: PracticeBankWhereInput
  }

  export type StudentAnswerListRelationFilter = {
    every?: StudentAnswerWhereInput
    some?: StudentAnswerWhereInput
    none?: StudentAnswerWhereInput
  }

  export type StudentAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduledTestCountOrderByAggregateInput = {
    id?: SortOrder
    practiceBankId?: SortOrder
    studentId?: SortOrder
    scheduledDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledTestMaxOrderByAggregateInput = {
    id?: SortOrder
    practiceBankId?: SortOrder
    studentId?: SortOrder
    scheduledDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledTestMinOrderByAggregateInput = {
    id?: SortOrder
    practiceBankId?: SortOrder
    studentId?: SortOrder
    scheduledDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ScheduledTestScalarRelationFilter = {
    is?: ScheduledTestWhereInput
    isNot?: ScheduledTestWhereInput
  }

  export type StudentAnswerScheduledTestIdQuestionIdCompoundUniqueInput = {
    scheduledTestId: string
    questionId: string
  }

  export type StudentAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
  }

  export type StudentAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
  }

  export type StudentAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    questionId?: SortOrder
    answerText?: SortOrder
    isCorrect?: SortOrder
    submittedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TestSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
    autoReviewed?: SortOrder
    answersReleased?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
  }

  export type TestSubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TestSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
    autoReviewed?: SortOrder
    answersReleased?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
  }

  export type TestSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    scheduledTestId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
    autoReviewed?: SortOrder
    answersReleased?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
  }

  export type TestSubmissionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PracticeBankCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PracticeBankCreateWithoutCreatedByInput, PracticeBankUncheckedCreateWithoutCreatedByInput> | PracticeBankCreateWithoutCreatedByInput[] | PracticeBankUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PracticeBankCreateOrConnectWithoutCreatedByInput | PracticeBankCreateOrConnectWithoutCreatedByInput[]
    createMany?: PracticeBankCreateManyCreatedByInputEnvelope
    connect?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
  }

  export type ScheduledTestCreateNestedManyWithoutStudentInput = {
    create?: XOR<ScheduledTestCreateWithoutStudentInput, ScheduledTestUncheckedCreateWithoutStudentInput> | ScheduledTestCreateWithoutStudentInput[] | ScheduledTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutStudentInput | ScheduledTestCreateOrConnectWithoutStudentInput[]
    createMany?: ScheduledTestCreateManyStudentInputEnvelope
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
  }

  export type TestSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<TestSubmissionCreateWithoutStudentInput, TestSubmissionUncheckedCreateWithoutStudentInput> | TestSubmissionCreateWithoutStudentInput[] | TestSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutStudentInput | TestSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: TestSubmissionCreateManyStudentInputEnvelope
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
  }

  export type PracticeBankUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PracticeBankCreateWithoutCreatedByInput, PracticeBankUncheckedCreateWithoutCreatedByInput> | PracticeBankCreateWithoutCreatedByInput[] | PracticeBankUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PracticeBankCreateOrConnectWithoutCreatedByInput | PracticeBankCreateOrConnectWithoutCreatedByInput[]
    createMany?: PracticeBankCreateManyCreatedByInputEnvelope
    connect?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
  }

  export type ScheduledTestUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ScheduledTestCreateWithoutStudentInput, ScheduledTestUncheckedCreateWithoutStudentInput> | ScheduledTestCreateWithoutStudentInput[] | ScheduledTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutStudentInput | ScheduledTestCreateOrConnectWithoutStudentInput[]
    createMany?: ScheduledTestCreateManyStudentInputEnvelope
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
  }

  export type TestSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TestSubmissionCreateWithoutStudentInput, TestSubmissionUncheckedCreateWithoutStudentInput> | TestSubmissionCreateWithoutStudentInput[] | TestSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutStudentInput | TestSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: TestSubmissionCreateManyStudentInputEnvelope
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
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

  export type PracticeBankUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PracticeBankCreateWithoutCreatedByInput, PracticeBankUncheckedCreateWithoutCreatedByInput> | PracticeBankCreateWithoutCreatedByInput[] | PracticeBankUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PracticeBankCreateOrConnectWithoutCreatedByInput | PracticeBankCreateOrConnectWithoutCreatedByInput[]
    upsert?: PracticeBankUpsertWithWhereUniqueWithoutCreatedByInput | PracticeBankUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PracticeBankCreateManyCreatedByInputEnvelope
    set?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    disconnect?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    delete?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    connect?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    update?: PracticeBankUpdateWithWhereUniqueWithoutCreatedByInput | PracticeBankUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PracticeBankUpdateManyWithWhereWithoutCreatedByInput | PracticeBankUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PracticeBankScalarWhereInput | PracticeBankScalarWhereInput[]
  }

  export type ScheduledTestUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ScheduledTestCreateWithoutStudentInput, ScheduledTestUncheckedCreateWithoutStudentInput> | ScheduledTestCreateWithoutStudentInput[] | ScheduledTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutStudentInput | ScheduledTestCreateOrConnectWithoutStudentInput[]
    upsert?: ScheduledTestUpsertWithWhereUniqueWithoutStudentInput | ScheduledTestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ScheduledTestCreateManyStudentInputEnvelope
    set?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    disconnect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    delete?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    update?: ScheduledTestUpdateWithWhereUniqueWithoutStudentInput | ScheduledTestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ScheduledTestUpdateManyWithWhereWithoutStudentInput | ScheduledTestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ScheduledTestScalarWhereInput | ScheduledTestScalarWhereInput[]
  }

  export type TestSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TestSubmissionCreateWithoutStudentInput, TestSubmissionUncheckedCreateWithoutStudentInput> | TestSubmissionCreateWithoutStudentInput[] | TestSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutStudentInput | TestSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: TestSubmissionUpsertWithWhereUniqueWithoutStudentInput | TestSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TestSubmissionCreateManyStudentInputEnvelope
    set?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    disconnect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    delete?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    update?: TestSubmissionUpdateWithWhereUniqueWithoutStudentInput | TestSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TestSubmissionUpdateManyWithWhereWithoutStudentInput | TestSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TestSubmissionScalarWhereInput | TestSubmissionScalarWhereInput[]
  }

  export type PracticeBankUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PracticeBankCreateWithoutCreatedByInput, PracticeBankUncheckedCreateWithoutCreatedByInput> | PracticeBankCreateWithoutCreatedByInput[] | PracticeBankUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PracticeBankCreateOrConnectWithoutCreatedByInput | PracticeBankCreateOrConnectWithoutCreatedByInput[]
    upsert?: PracticeBankUpsertWithWhereUniqueWithoutCreatedByInput | PracticeBankUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PracticeBankCreateManyCreatedByInputEnvelope
    set?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    disconnect?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    delete?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    connect?: PracticeBankWhereUniqueInput | PracticeBankWhereUniqueInput[]
    update?: PracticeBankUpdateWithWhereUniqueWithoutCreatedByInput | PracticeBankUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PracticeBankUpdateManyWithWhereWithoutCreatedByInput | PracticeBankUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PracticeBankScalarWhereInput | PracticeBankScalarWhereInput[]
  }

  export type ScheduledTestUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ScheduledTestCreateWithoutStudentInput, ScheduledTestUncheckedCreateWithoutStudentInput> | ScheduledTestCreateWithoutStudentInput[] | ScheduledTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutStudentInput | ScheduledTestCreateOrConnectWithoutStudentInput[]
    upsert?: ScheduledTestUpsertWithWhereUniqueWithoutStudentInput | ScheduledTestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ScheduledTestCreateManyStudentInputEnvelope
    set?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    disconnect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    delete?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    update?: ScheduledTestUpdateWithWhereUniqueWithoutStudentInput | ScheduledTestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ScheduledTestUpdateManyWithWhereWithoutStudentInput | ScheduledTestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ScheduledTestScalarWhereInput | ScheduledTestScalarWhereInput[]
  }

  export type TestSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TestSubmissionCreateWithoutStudentInput, TestSubmissionUncheckedCreateWithoutStudentInput> | TestSubmissionCreateWithoutStudentInput[] | TestSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutStudentInput | TestSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: TestSubmissionUpsertWithWhereUniqueWithoutStudentInput | TestSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TestSubmissionCreateManyStudentInputEnvelope
    set?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    disconnect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    delete?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    update?: TestSubmissionUpdateWithWhereUniqueWithoutStudentInput | TestSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TestSubmissionUpdateManyWithWhereWithoutStudentInput | TestSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TestSubmissionScalarWhereInput | TestSubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedPracticesInput = {
    create?: XOR<UserCreateWithoutCreatedPracticesInput, UserUncheckedCreateWithoutCreatedPracticesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPracticesInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduledTestCreateNestedManyWithoutPracticeBankInput = {
    create?: XOR<ScheduledTestCreateWithoutPracticeBankInput, ScheduledTestUncheckedCreateWithoutPracticeBankInput> | ScheduledTestCreateWithoutPracticeBankInput[] | ScheduledTestUncheckedCreateWithoutPracticeBankInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutPracticeBankInput | ScheduledTestCreateOrConnectWithoutPracticeBankInput[]
    createMany?: ScheduledTestCreateManyPracticeBankInputEnvelope
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
  }

  export type ScheduledTestUncheckedCreateNestedManyWithoutPracticeBankInput = {
    create?: XOR<ScheduledTestCreateWithoutPracticeBankInput, ScheduledTestUncheckedCreateWithoutPracticeBankInput> | ScheduledTestCreateWithoutPracticeBankInput[] | ScheduledTestUncheckedCreateWithoutPracticeBankInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutPracticeBankInput | ScheduledTestCreateOrConnectWithoutPracticeBankInput[]
    createMany?: ScheduledTestCreateManyPracticeBankInputEnvelope
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedPracticesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedPracticesInput, UserUncheckedCreateWithoutCreatedPracticesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPracticesInput
    upsert?: UserUpsertWithoutCreatedPracticesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedPracticesInput, UserUpdateWithoutCreatedPracticesInput>, UserUncheckedUpdateWithoutCreatedPracticesInput>
  }

  export type ScheduledTestUpdateManyWithoutPracticeBankNestedInput = {
    create?: XOR<ScheduledTestCreateWithoutPracticeBankInput, ScheduledTestUncheckedCreateWithoutPracticeBankInput> | ScheduledTestCreateWithoutPracticeBankInput[] | ScheduledTestUncheckedCreateWithoutPracticeBankInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutPracticeBankInput | ScheduledTestCreateOrConnectWithoutPracticeBankInput[]
    upsert?: ScheduledTestUpsertWithWhereUniqueWithoutPracticeBankInput | ScheduledTestUpsertWithWhereUniqueWithoutPracticeBankInput[]
    createMany?: ScheduledTestCreateManyPracticeBankInputEnvelope
    set?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    disconnect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    delete?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    update?: ScheduledTestUpdateWithWhereUniqueWithoutPracticeBankInput | ScheduledTestUpdateWithWhereUniqueWithoutPracticeBankInput[]
    updateMany?: ScheduledTestUpdateManyWithWhereWithoutPracticeBankInput | ScheduledTestUpdateManyWithWhereWithoutPracticeBankInput[]
    deleteMany?: ScheduledTestScalarWhereInput | ScheduledTestScalarWhereInput[]
  }

  export type ScheduledTestUncheckedUpdateManyWithoutPracticeBankNestedInput = {
    create?: XOR<ScheduledTestCreateWithoutPracticeBankInput, ScheduledTestUncheckedCreateWithoutPracticeBankInput> | ScheduledTestCreateWithoutPracticeBankInput[] | ScheduledTestUncheckedCreateWithoutPracticeBankInput[]
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutPracticeBankInput | ScheduledTestCreateOrConnectWithoutPracticeBankInput[]
    upsert?: ScheduledTestUpsertWithWhereUniqueWithoutPracticeBankInput | ScheduledTestUpsertWithWhereUniqueWithoutPracticeBankInput[]
    createMany?: ScheduledTestCreateManyPracticeBankInputEnvelope
    set?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    disconnect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    delete?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    connect?: ScheduledTestWhereUniqueInput | ScheduledTestWhereUniqueInput[]
    update?: ScheduledTestUpdateWithWhereUniqueWithoutPracticeBankInput | ScheduledTestUpdateWithWhereUniqueWithoutPracticeBankInput[]
    updateMany?: ScheduledTestUpdateManyWithWhereWithoutPracticeBankInput | ScheduledTestUpdateManyWithWhereWithoutPracticeBankInput[]
    deleteMany?: ScheduledTestScalarWhereInput | ScheduledTestScalarWhereInput[]
  }

  export type PracticeBankCreateNestedOneWithoutScheduledTestsInput = {
    create?: XOR<PracticeBankCreateWithoutScheduledTestsInput, PracticeBankUncheckedCreateWithoutScheduledTestsInput>
    connectOrCreate?: PracticeBankCreateOrConnectWithoutScheduledTestsInput
    connect?: PracticeBankWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutScheduledTestsInput = {
    create?: XOR<UserCreateWithoutScheduledTestsInput, UserUncheckedCreateWithoutScheduledTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduledTestsInput
    connect?: UserWhereUniqueInput
  }

  export type TestSubmissionCreateNestedManyWithoutScheduledTestInput = {
    create?: XOR<TestSubmissionCreateWithoutScheduledTestInput, TestSubmissionUncheckedCreateWithoutScheduledTestInput> | TestSubmissionCreateWithoutScheduledTestInput[] | TestSubmissionUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutScheduledTestInput | TestSubmissionCreateOrConnectWithoutScheduledTestInput[]
    createMany?: TestSubmissionCreateManyScheduledTestInputEnvelope
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
  }

  export type StudentAnswerCreateNestedManyWithoutScheduledTestInput = {
    create?: XOR<StudentAnswerCreateWithoutScheduledTestInput, StudentAnswerUncheckedCreateWithoutScheduledTestInput> | StudentAnswerCreateWithoutScheduledTestInput[] | StudentAnswerUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutScheduledTestInput | StudentAnswerCreateOrConnectWithoutScheduledTestInput[]
    createMany?: StudentAnswerCreateManyScheduledTestInputEnvelope
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
  }

  export type TestSubmissionUncheckedCreateNestedManyWithoutScheduledTestInput = {
    create?: XOR<TestSubmissionCreateWithoutScheduledTestInput, TestSubmissionUncheckedCreateWithoutScheduledTestInput> | TestSubmissionCreateWithoutScheduledTestInput[] | TestSubmissionUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutScheduledTestInput | TestSubmissionCreateOrConnectWithoutScheduledTestInput[]
    createMany?: TestSubmissionCreateManyScheduledTestInputEnvelope
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
  }

  export type StudentAnswerUncheckedCreateNestedManyWithoutScheduledTestInput = {
    create?: XOR<StudentAnswerCreateWithoutScheduledTestInput, StudentAnswerUncheckedCreateWithoutScheduledTestInput> | StudentAnswerCreateWithoutScheduledTestInput[] | StudentAnswerUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutScheduledTestInput | StudentAnswerCreateOrConnectWithoutScheduledTestInput[]
    createMany?: StudentAnswerCreateManyScheduledTestInputEnvelope
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PracticeBankUpdateOneRequiredWithoutScheduledTestsNestedInput = {
    create?: XOR<PracticeBankCreateWithoutScheduledTestsInput, PracticeBankUncheckedCreateWithoutScheduledTestsInput>
    connectOrCreate?: PracticeBankCreateOrConnectWithoutScheduledTestsInput
    upsert?: PracticeBankUpsertWithoutScheduledTestsInput
    connect?: PracticeBankWhereUniqueInput
    update?: XOR<XOR<PracticeBankUpdateToOneWithWhereWithoutScheduledTestsInput, PracticeBankUpdateWithoutScheduledTestsInput>, PracticeBankUncheckedUpdateWithoutScheduledTestsInput>
  }

  export type UserUpdateOneRequiredWithoutScheduledTestsNestedInput = {
    create?: XOR<UserCreateWithoutScheduledTestsInput, UserUncheckedCreateWithoutScheduledTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduledTestsInput
    upsert?: UserUpsertWithoutScheduledTestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScheduledTestsInput, UserUpdateWithoutScheduledTestsInput>, UserUncheckedUpdateWithoutScheduledTestsInput>
  }

  export type TestSubmissionUpdateManyWithoutScheduledTestNestedInput = {
    create?: XOR<TestSubmissionCreateWithoutScheduledTestInput, TestSubmissionUncheckedCreateWithoutScheduledTestInput> | TestSubmissionCreateWithoutScheduledTestInput[] | TestSubmissionUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutScheduledTestInput | TestSubmissionCreateOrConnectWithoutScheduledTestInput[]
    upsert?: TestSubmissionUpsertWithWhereUniqueWithoutScheduledTestInput | TestSubmissionUpsertWithWhereUniqueWithoutScheduledTestInput[]
    createMany?: TestSubmissionCreateManyScheduledTestInputEnvelope
    set?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    disconnect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    delete?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    update?: TestSubmissionUpdateWithWhereUniqueWithoutScheduledTestInput | TestSubmissionUpdateWithWhereUniqueWithoutScheduledTestInput[]
    updateMany?: TestSubmissionUpdateManyWithWhereWithoutScheduledTestInput | TestSubmissionUpdateManyWithWhereWithoutScheduledTestInput[]
    deleteMany?: TestSubmissionScalarWhereInput | TestSubmissionScalarWhereInput[]
  }

  export type StudentAnswerUpdateManyWithoutScheduledTestNestedInput = {
    create?: XOR<StudentAnswerCreateWithoutScheduledTestInput, StudentAnswerUncheckedCreateWithoutScheduledTestInput> | StudentAnswerCreateWithoutScheduledTestInput[] | StudentAnswerUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutScheduledTestInput | StudentAnswerCreateOrConnectWithoutScheduledTestInput[]
    upsert?: StudentAnswerUpsertWithWhereUniqueWithoutScheduledTestInput | StudentAnswerUpsertWithWhereUniqueWithoutScheduledTestInput[]
    createMany?: StudentAnswerCreateManyScheduledTestInputEnvelope
    set?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    disconnect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    delete?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    update?: StudentAnswerUpdateWithWhereUniqueWithoutScheduledTestInput | StudentAnswerUpdateWithWhereUniqueWithoutScheduledTestInput[]
    updateMany?: StudentAnswerUpdateManyWithWhereWithoutScheduledTestInput | StudentAnswerUpdateManyWithWhereWithoutScheduledTestInput[]
    deleteMany?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
  }

  export type TestSubmissionUncheckedUpdateManyWithoutScheduledTestNestedInput = {
    create?: XOR<TestSubmissionCreateWithoutScheduledTestInput, TestSubmissionUncheckedCreateWithoutScheduledTestInput> | TestSubmissionCreateWithoutScheduledTestInput[] | TestSubmissionUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: TestSubmissionCreateOrConnectWithoutScheduledTestInput | TestSubmissionCreateOrConnectWithoutScheduledTestInput[]
    upsert?: TestSubmissionUpsertWithWhereUniqueWithoutScheduledTestInput | TestSubmissionUpsertWithWhereUniqueWithoutScheduledTestInput[]
    createMany?: TestSubmissionCreateManyScheduledTestInputEnvelope
    set?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    disconnect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    delete?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    connect?: TestSubmissionWhereUniqueInput | TestSubmissionWhereUniqueInput[]
    update?: TestSubmissionUpdateWithWhereUniqueWithoutScheduledTestInput | TestSubmissionUpdateWithWhereUniqueWithoutScheduledTestInput[]
    updateMany?: TestSubmissionUpdateManyWithWhereWithoutScheduledTestInput | TestSubmissionUpdateManyWithWhereWithoutScheduledTestInput[]
    deleteMany?: TestSubmissionScalarWhereInput | TestSubmissionScalarWhereInput[]
  }

  export type StudentAnswerUncheckedUpdateManyWithoutScheduledTestNestedInput = {
    create?: XOR<StudentAnswerCreateWithoutScheduledTestInput, StudentAnswerUncheckedCreateWithoutScheduledTestInput> | StudentAnswerCreateWithoutScheduledTestInput[] | StudentAnswerUncheckedCreateWithoutScheduledTestInput[]
    connectOrCreate?: StudentAnswerCreateOrConnectWithoutScheduledTestInput | StudentAnswerCreateOrConnectWithoutScheduledTestInput[]
    upsert?: StudentAnswerUpsertWithWhereUniqueWithoutScheduledTestInput | StudentAnswerUpsertWithWhereUniqueWithoutScheduledTestInput[]
    createMany?: StudentAnswerCreateManyScheduledTestInputEnvelope
    set?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    disconnect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    delete?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    connect?: StudentAnswerWhereUniqueInput | StudentAnswerWhereUniqueInput[]
    update?: StudentAnswerUpdateWithWhereUniqueWithoutScheduledTestInput | StudentAnswerUpdateWithWhereUniqueWithoutScheduledTestInput[]
    updateMany?: StudentAnswerUpdateManyWithWhereWithoutScheduledTestInput | StudentAnswerUpdateManyWithWhereWithoutScheduledTestInput[]
    deleteMany?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
  }

  export type ScheduledTestCreateNestedOneWithoutAnswersInput = {
    create?: XOR<ScheduledTestCreateWithoutAnswersInput, ScheduledTestUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutAnswersInput
    connect?: ScheduledTestWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ScheduledTestUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<ScheduledTestCreateWithoutAnswersInput, ScheduledTestUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutAnswersInput
    upsert?: ScheduledTestUpsertWithoutAnswersInput
    connect?: ScheduledTestWhereUniqueInput
    update?: XOR<XOR<ScheduledTestUpdateToOneWithWhereWithoutAnswersInput, ScheduledTestUpdateWithoutAnswersInput>, ScheduledTestUncheckedUpdateWithoutAnswersInput>
  }

  export type ScheduledTestCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ScheduledTestCreateWithoutSubmissionsInput, ScheduledTestUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutSubmissionsInput
    connect?: ScheduledTestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScheduledTestUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ScheduledTestCreateWithoutSubmissionsInput, ScheduledTestUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ScheduledTestCreateOrConnectWithoutSubmissionsInput
    upsert?: ScheduledTestUpsertWithoutSubmissionsInput
    connect?: ScheduledTestWhereUniqueInput
    update?: XOR<XOR<ScheduledTestUpdateToOneWithWhereWithoutSubmissionsInput, ScheduledTestUpdateWithoutSubmissionsInput>, ScheduledTestUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PracticeBankCreateWithoutCreatedByInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduledTests?: ScheduledTestCreateNestedManyWithoutPracticeBankInput
  }

  export type PracticeBankUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduledTests?: ScheduledTestUncheckedCreateNestedManyWithoutPracticeBankInput
  }

  export type PracticeBankCreateOrConnectWithoutCreatedByInput = {
    where: PracticeBankWhereUniqueInput
    create: XOR<PracticeBankCreateWithoutCreatedByInput, PracticeBankUncheckedCreateWithoutCreatedByInput>
  }

  export type PracticeBankCreateManyCreatedByInputEnvelope = {
    data: PracticeBankCreateManyCreatedByInput | PracticeBankCreateManyCreatedByInput[]
  }

  export type ScheduledTestCreateWithoutStudentInput = {
    id?: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceBank: PracticeBankCreateNestedOneWithoutScheduledTestsInput
    submissions?: TestSubmissionCreateNestedManyWithoutScheduledTestInput
    answers?: StudentAnswerCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestUncheckedCreateWithoutStudentInput = {
    id?: string
    practiceBankId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: TestSubmissionUncheckedCreateNestedManyWithoutScheduledTestInput
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestCreateOrConnectWithoutStudentInput = {
    where: ScheduledTestWhereUniqueInput
    create: XOR<ScheduledTestCreateWithoutStudentInput, ScheduledTestUncheckedCreateWithoutStudentInput>
  }

  export type ScheduledTestCreateManyStudentInputEnvelope = {
    data: ScheduledTestCreateManyStudentInput | ScheduledTestCreateManyStudentInput[]
  }

  export type TestSubmissionCreateWithoutStudentInput = {
    id?: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
    scheduledTest: ScheduledTestCreateNestedOneWithoutSubmissionsInput
  }

  export type TestSubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    scheduledTestId: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
  }

  export type TestSubmissionCreateOrConnectWithoutStudentInput = {
    where: TestSubmissionWhereUniqueInput
    create: XOR<TestSubmissionCreateWithoutStudentInput, TestSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type TestSubmissionCreateManyStudentInputEnvelope = {
    data: TestSubmissionCreateManyStudentInput | TestSubmissionCreateManyStudentInput[]
  }

  export type PracticeBankUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PracticeBankWhereUniqueInput
    update: XOR<PracticeBankUpdateWithoutCreatedByInput, PracticeBankUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PracticeBankCreateWithoutCreatedByInput, PracticeBankUncheckedCreateWithoutCreatedByInput>
  }

  export type PracticeBankUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PracticeBankWhereUniqueInput
    data: XOR<PracticeBankUpdateWithoutCreatedByInput, PracticeBankUncheckedUpdateWithoutCreatedByInput>
  }

  export type PracticeBankUpdateManyWithWhereWithoutCreatedByInput = {
    where: PracticeBankScalarWhereInput
    data: XOR<PracticeBankUpdateManyMutationInput, PracticeBankUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PracticeBankScalarWhereInput = {
    AND?: PracticeBankScalarWhereInput | PracticeBankScalarWhereInput[]
    OR?: PracticeBankScalarWhereInput[]
    NOT?: PracticeBankScalarWhereInput | PracticeBankScalarWhereInput[]
    id?: StringFilter<"PracticeBank"> | string
    title?: StringFilter<"PracticeBank"> | string
    businessDomain?: StringFilter<"PracticeBank"> | string
    category?: StringFilter<"PracticeBank"> | string
    focusAreas?: StringFilter<"PracticeBank"> | string
    questions?: StringFilter<"PracticeBank"> | string
    answers?: StringFilter<"PracticeBank"> | string
    createdById?: StringFilter<"PracticeBank"> | string
    createdAt?: DateTimeFilter<"PracticeBank"> | Date | string
    updatedAt?: DateTimeFilter<"PracticeBank"> | Date | string
  }

  export type ScheduledTestUpsertWithWhereUniqueWithoutStudentInput = {
    where: ScheduledTestWhereUniqueInput
    update: XOR<ScheduledTestUpdateWithoutStudentInput, ScheduledTestUncheckedUpdateWithoutStudentInput>
    create: XOR<ScheduledTestCreateWithoutStudentInput, ScheduledTestUncheckedCreateWithoutStudentInput>
  }

  export type ScheduledTestUpdateWithWhereUniqueWithoutStudentInput = {
    where: ScheduledTestWhereUniqueInput
    data: XOR<ScheduledTestUpdateWithoutStudentInput, ScheduledTestUncheckedUpdateWithoutStudentInput>
  }

  export type ScheduledTestUpdateManyWithWhereWithoutStudentInput = {
    where: ScheduledTestScalarWhereInput
    data: XOR<ScheduledTestUpdateManyMutationInput, ScheduledTestUncheckedUpdateManyWithoutStudentInput>
  }

  export type ScheduledTestScalarWhereInput = {
    AND?: ScheduledTestScalarWhereInput | ScheduledTestScalarWhereInput[]
    OR?: ScheduledTestScalarWhereInput[]
    NOT?: ScheduledTestScalarWhereInput | ScheduledTestScalarWhereInput[]
    id?: StringFilter<"ScheduledTest"> | string
    practiceBankId?: StringFilter<"ScheduledTest"> | string
    studentId?: StringFilter<"ScheduledTest"> | string
    scheduledDate?: DateTimeFilter<"ScheduledTest"> | Date | string
    dueDate?: DateTimeNullableFilter<"ScheduledTest"> | Date | string | null
    status?: StringFilter<"ScheduledTest"> | string
    createdAt?: DateTimeFilter<"ScheduledTest"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledTest"> | Date | string
  }

  export type TestSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: TestSubmissionWhereUniqueInput
    update: XOR<TestSubmissionUpdateWithoutStudentInput, TestSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<TestSubmissionCreateWithoutStudentInput, TestSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type TestSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: TestSubmissionWhereUniqueInput
    data: XOR<TestSubmissionUpdateWithoutStudentInput, TestSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type TestSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: TestSubmissionScalarWhereInput
    data: XOR<TestSubmissionUpdateManyMutationInput, TestSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type TestSubmissionScalarWhereInput = {
    AND?: TestSubmissionScalarWhereInput | TestSubmissionScalarWhereInput[]
    OR?: TestSubmissionScalarWhereInput[]
    NOT?: TestSubmissionScalarWhereInput | TestSubmissionScalarWhereInput[]
    id?: StringFilter<"TestSubmission"> | string
    scheduledTestId?: StringFilter<"TestSubmission"> | string
    studentId?: StringFilter<"TestSubmission"> | string
    submittedAt?: DateTimeFilter<"TestSubmission"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"TestSubmission"> | Date | string | null
    reviewedBy?: StringNullableFilter<"TestSubmission"> | string | null
    autoReviewed?: BoolFilter<"TestSubmission"> | boolean
    answersReleased?: BoolFilter<"TestSubmission"> | boolean
    score?: FloatNullableFilter<"TestSubmission"> | number | null
    feedback?: StringNullableFilter<"TestSubmission"> | string | null
  }

  export type UserCreateWithoutCreatedPracticesInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduledTests?: ScheduledTestCreateNestedManyWithoutStudentInput
    submissions?: TestSubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutCreatedPracticesInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduledTests?: ScheduledTestUncheckedCreateNestedManyWithoutStudentInput
    submissions?: TestSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutCreatedPracticesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedPracticesInput, UserUncheckedCreateWithoutCreatedPracticesInput>
  }

  export type ScheduledTestCreateWithoutPracticeBankInput = {
    id?: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutScheduledTestsInput
    submissions?: TestSubmissionCreateNestedManyWithoutScheduledTestInput
    answers?: StudentAnswerCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestUncheckedCreateWithoutPracticeBankInput = {
    id?: string
    studentId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: TestSubmissionUncheckedCreateNestedManyWithoutScheduledTestInput
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestCreateOrConnectWithoutPracticeBankInput = {
    where: ScheduledTestWhereUniqueInput
    create: XOR<ScheduledTestCreateWithoutPracticeBankInput, ScheduledTestUncheckedCreateWithoutPracticeBankInput>
  }

  export type ScheduledTestCreateManyPracticeBankInputEnvelope = {
    data: ScheduledTestCreateManyPracticeBankInput | ScheduledTestCreateManyPracticeBankInput[]
  }

  export type UserUpsertWithoutCreatedPracticesInput = {
    update: XOR<UserUpdateWithoutCreatedPracticesInput, UserUncheckedUpdateWithoutCreatedPracticesInput>
    create: XOR<UserCreateWithoutCreatedPracticesInput, UserUncheckedCreateWithoutCreatedPracticesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedPracticesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedPracticesInput, UserUncheckedUpdateWithoutCreatedPracticesInput>
  }

  export type UserUpdateWithoutCreatedPracticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTests?: ScheduledTestUpdateManyWithoutStudentNestedInput
    submissions?: TestSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedPracticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTests?: ScheduledTestUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: TestSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ScheduledTestUpsertWithWhereUniqueWithoutPracticeBankInput = {
    where: ScheduledTestWhereUniqueInput
    update: XOR<ScheduledTestUpdateWithoutPracticeBankInput, ScheduledTestUncheckedUpdateWithoutPracticeBankInput>
    create: XOR<ScheduledTestCreateWithoutPracticeBankInput, ScheduledTestUncheckedCreateWithoutPracticeBankInput>
  }

  export type ScheduledTestUpdateWithWhereUniqueWithoutPracticeBankInput = {
    where: ScheduledTestWhereUniqueInput
    data: XOR<ScheduledTestUpdateWithoutPracticeBankInput, ScheduledTestUncheckedUpdateWithoutPracticeBankInput>
  }

  export type ScheduledTestUpdateManyWithWhereWithoutPracticeBankInput = {
    where: ScheduledTestScalarWhereInput
    data: XOR<ScheduledTestUpdateManyMutationInput, ScheduledTestUncheckedUpdateManyWithoutPracticeBankInput>
  }

  export type PracticeBankCreateWithoutScheduledTestsInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedPracticesInput
  }

  export type PracticeBankUncheckedCreateWithoutScheduledTestsInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PracticeBankCreateOrConnectWithoutScheduledTestsInput = {
    where: PracticeBankWhereUniqueInput
    create: XOR<PracticeBankCreateWithoutScheduledTestsInput, PracticeBankUncheckedCreateWithoutScheduledTestsInput>
  }

  export type UserCreateWithoutScheduledTestsInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdPractices?: PracticeBankCreateNestedManyWithoutCreatedByInput
    submissions?: TestSubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutScheduledTestsInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdPractices?: PracticeBankUncheckedCreateNestedManyWithoutCreatedByInput
    submissions?: TestSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutScheduledTestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScheduledTestsInput, UserUncheckedCreateWithoutScheduledTestsInput>
  }

  export type TestSubmissionCreateWithoutScheduledTestInput = {
    id?: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
    student: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type TestSubmissionUncheckedCreateWithoutScheduledTestInput = {
    id?: string
    studentId: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
  }

  export type TestSubmissionCreateOrConnectWithoutScheduledTestInput = {
    where: TestSubmissionWhereUniqueInput
    create: XOR<TestSubmissionCreateWithoutScheduledTestInput, TestSubmissionUncheckedCreateWithoutScheduledTestInput>
  }

  export type TestSubmissionCreateManyScheduledTestInputEnvelope = {
    data: TestSubmissionCreateManyScheduledTestInput | TestSubmissionCreateManyScheduledTestInput[]
  }

  export type StudentAnswerCreateWithoutScheduledTestInput = {
    id?: string
    questionId: string
    answerText: string
    isCorrect?: boolean | null
    submittedAt?: Date | string
  }

  export type StudentAnswerUncheckedCreateWithoutScheduledTestInput = {
    id?: string
    questionId: string
    answerText: string
    isCorrect?: boolean | null
    submittedAt?: Date | string
  }

  export type StudentAnswerCreateOrConnectWithoutScheduledTestInput = {
    where: StudentAnswerWhereUniqueInput
    create: XOR<StudentAnswerCreateWithoutScheduledTestInput, StudentAnswerUncheckedCreateWithoutScheduledTestInput>
  }

  export type StudentAnswerCreateManyScheduledTestInputEnvelope = {
    data: StudentAnswerCreateManyScheduledTestInput | StudentAnswerCreateManyScheduledTestInput[]
  }

  export type PracticeBankUpsertWithoutScheduledTestsInput = {
    update: XOR<PracticeBankUpdateWithoutScheduledTestsInput, PracticeBankUncheckedUpdateWithoutScheduledTestsInput>
    create: XOR<PracticeBankCreateWithoutScheduledTestsInput, PracticeBankUncheckedCreateWithoutScheduledTestsInput>
    where?: PracticeBankWhereInput
  }

  export type PracticeBankUpdateToOneWithWhereWithoutScheduledTestsInput = {
    where?: PracticeBankWhereInput
    data: XOR<PracticeBankUpdateWithoutScheduledTestsInput, PracticeBankUncheckedUpdateWithoutScheduledTestsInput>
  }

  export type PracticeBankUpdateWithoutScheduledTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedPracticesNestedInput
  }

  export type PracticeBankUncheckedUpdateWithoutScheduledTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutScheduledTestsInput = {
    update: XOR<UserUpdateWithoutScheduledTestsInput, UserUncheckedUpdateWithoutScheduledTestsInput>
    create: XOR<UserCreateWithoutScheduledTestsInput, UserUncheckedCreateWithoutScheduledTestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScheduledTestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScheduledTestsInput, UserUncheckedUpdateWithoutScheduledTestsInput>
  }

  export type UserUpdateWithoutScheduledTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdPractices?: PracticeBankUpdateManyWithoutCreatedByNestedInput
    submissions?: TestSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutScheduledTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdPractices?: PracticeBankUncheckedUpdateManyWithoutCreatedByNestedInput
    submissions?: TestSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TestSubmissionUpsertWithWhereUniqueWithoutScheduledTestInput = {
    where: TestSubmissionWhereUniqueInput
    update: XOR<TestSubmissionUpdateWithoutScheduledTestInput, TestSubmissionUncheckedUpdateWithoutScheduledTestInput>
    create: XOR<TestSubmissionCreateWithoutScheduledTestInput, TestSubmissionUncheckedCreateWithoutScheduledTestInput>
  }

  export type TestSubmissionUpdateWithWhereUniqueWithoutScheduledTestInput = {
    where: TestSubmissionWhereUniqueInput
    data: XOR<TestSubmissionUpdateWithoutScheduledTestInput, TestSubmissionUncheckedUpdateWithoutScheduledTestInput>
  }

  export type TestSubmissionUpdateManyWithWhereWithoutScheduledTestInput = {
    where: TestSubmissionScalarWhereInput
    data: XOR<TestSubmissionUpdateManyMutationInput, TestSubmissionUncheckedUpdateManyWithoutScheduledTestInput>
  }

  export type StudentAnswerUpsertWithWhereUniqueWithoutScheduledTestInput = {
    where: StudentAnswerWhereUniqueInput
    update: XOR<StudentAnswerUpdateWithoutScheduledTestInput, StudentAnswerUncheckedUpdateWithoutScheduledTestInput>
    create: XOR<StudentAnswerCreateWithoutScheduledTestInput, StudentAnswerUncheckedCreateWithoutScheduledTestInput>
  }

  export type StudentAnswerUpdateWithWhereUniqueWithoutScheduledTestInput = {
    where: StudentAnswerWhereUniqueInput
    data: XOR<StudentAnswerUpdateWithoutScheduledTestInput, StudentAnswerUncheckedUpdateWithoutScheduledTestInput>
  }

  export type StudentAnswerUpdateManyWithWhereWithoutScheduledTestInput = {
    where: StudentAnswerScalarWhereInput
    data: XOR<StudentAnswerUpdateManyMutationInput, StudentAnswerUncheckedUpdateManyWithoutScheduledTestInput>
  }

  export type StudentAnswerScalarWhereInput = {
    AND?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
    OR?: StudentAnswerScalarWhereInput[]
    NOT?: StudentAnswerScalarWhereInput | StudentAnswerScalarWhereInput[]
    id?: StringFilter<"StudentAnswer"> | string
    scheduledTestId?: StringFilter<"StudentAnswer"> | string
    questionId?: StringFilter<"StudentAnswer"> | string
    answerText?: StringFilter<"StudentAnswer"> | string
    isCorrect?: BoolNullableFilter<"StudentAnswer"> | boolean | null
    submittedAt?: DateTimeFilter<"StudentAnswer"> | Date | string
  }

  export type ScheduledTestCreateWithoutAnswersInput = {
    id?: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceBank: PracticeBankCreateNestedOneWithoutScheduledTestsInput
    student: UserCreateNestedOneWithoutScheduledTestsInput
    submissions?: TestSubmissionCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestUncheckedCreateWithoutAnswersInput = {
    id?: string
    practiceBankId: string
    studentId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: TestSubmissionUncheckedCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestCreateOrConnectWithoutAnswersInput = {
    where: ScheduledTestWhereUniqueInput
    create: XOR<ScheduledTestCreateWithoutAnswersInput, ScheduledTestUncheckedCreateWithoutAnswersInput>
  }

  export type ScheduledTestUpsertWithoutAnswersInput = {
    update: XOR<ScheduledTestUpdateWithoutAnswersInput, ScheduledTestUncheckedUpdateWithoutAnswersInput>
    create: XOR<ScheduledTestCreateWithoutAnswersInput, ScheduledTestUncheckedCreateWithoutAnswersInput>
    where?: ScheduledTestWhereInput
  }

  export type ScheduledTestUpdateToOneWithWhereWithoutAnswersInput = {
    where?: ScheduledTestWhereInput
    data: XOR<ScheduledTestUpdateWithoutAnswersInput, ScheduledTestUncheckedUpdateWithoutAnswersInput>
  }

  export type ScheduledTestUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceBank?: PracticeBankUpdateOneRequiredWithoutScheduledTestsNestedInput
    student?: UserUpdateOneRequiredWithoutScheduledTestsNestedInput
    submissions?: TestSubmissionUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceBankId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TestSubmissionUncheckedUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestCreateWithoutSubmissionsInput = {
    id?: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceBank: PracticeBankCreateNestedOneWithoutScheduledTestsInput
    student: UserCreateNestedOneWithoutScheduledTestsInput
    answers?: StudentAnswerCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    practiceBankId: string
    studentId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: StudentAnswerUncheckedCreateNestedManyWithoutScheduledTestInput
  }

  export type ScheduledTestCreateOrConnectWithoutSubmissionsInput = {
    where: ScheduledTestWhereUniqueInput
    create: XOR<ScheduledTestCreateWithoutSubmissionsInput, ScheduledTestUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdPractices?: PracticeBankCreateNestedManyWithoutCreatedByInput
    scheduledTests?: ScheduledTestCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    username: string
    password: string
    role: string
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdPractices?: PracticeBankUncheckedCreateNestedManyWithoutCreatedByInput
    scheduledTests?: ScheduledTestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ScheduledTestUpsertWithoutSubmissionsInput = {
    update: XOR<ScheduledTestUpdateWithoutSubmissionsInput, ScheduledTestUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ScheduledTestCreateWithoutSubmissionsInput, ScheduledTestUncheckedCreateWithoutSubmissionsInput>
    where?: ScheduledTestWhereInput
  }

  export type ScheduledTestUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ScheduledTestWhereInput
    data: XOR<ScheduledTestUpdateWithoutSubmissionsInput, ScheduledTestUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ScheduledTestUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceBank?: PracticeBankUpdateOneRequiredWithoutScheduledTestsNestedInput
    student?: UserUpdateOneRequiredWithoutScheduledTestsNestedInput
    answers?: StudentAnswerUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceBankId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: StudentAnswerUncheckedUpdateManyWithoutScheduledTestNestedInput
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdPractices?: PracticeBankUpdateManyWithoutCreatedByNestedInput
    scheduledTests?: ScheduledTestUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdPractices?: PracticeBankUncheckedUpdateManyWithoutCreatedByNestedInput
    scheduledTests?: ScheduledTestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PracticeBankCreateManyCreatedByInput = {
    id?: string
    title: string
    businessDomain: string
    category: string
    focusAreas: string
    questions: string
    answers: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledTestCreateManyStudentInput = {
    id?: string
    practiceBankId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestSubmissionCreateManyStudentInput = {
    id?: string
    scheduledTestId: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
  }

  export type PracticeBankUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTests?: ScheduledTestUpdateManyWithoutPracticeBankNestedInput
  }

  export type PracticeBankUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTests?: ScheduledTestUncheckedUpdateManyWithoutPracticeBankNestedInput
  }

  export type PracticeBankUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    businessDomain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    focusAreas?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledTestUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceBank?: PracticeBankUpdateOneRequiredWithoutScheduledTestsNestedInput
    submissions?: TestSubmissionUpdateManyWithoutScheduledTestNestedInput
    answers?: StudentAnswerUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceBankId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TestSubmissionUncheckedUpdateManyWithoutScheduledTestNestedInput
    answers?: StudentAnswerUncheckedUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceBankId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestSubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledTest?: ScheduledTestUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type TestSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTestId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTestId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduledTestCreateManyPracticeBankInput = {
    id?: string
    studentId: string
    scheduledDate: Date | string
    dueDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledTestUpdateWithoutPracticeBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutScheduledTestsNestedInput
    submissions?: TestSubmissionUpdateManyWithoutScheduledTestNestedInput
    answers?: StudentAnswerUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestUncheckedUpdateWithoutPracticeBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TestSubmissionUncheckedUpdateManyWithoutScheduledTestNestedInput
    answers?: StudentAnswerUncheckedUpdateManyWithoutScheduledTestNestedInput
  }

  export type ScheduledTestUncheckedUpdateManyWithoutPracticeBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestSubmissionCreateManyScheduledTestInput = {
    id?: string
    studentId: string
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    autoReviewed?: boolean
    answersReleased?: boolean
    score?: number | null
    feedback?: string | null
  }

  export type StudentAnswerCreateManyScheduledTestInput = {
    id?: string
    questionId: string
    answerText: string
    isCorrect?: boolean | null
    submittedAt?: Date | string
  }

  export type TestSubmissionUpdateWithoutScheduledTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    student?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type TestSubmissionUncheckedUpdateWithoutScheduledTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestSubmissionUncheckedUpdateManyWithoutScheduledTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    autoReviewed?: BoolFieldUpdateOperationsInput | boolean
    answersReleased?: BoolFieldUpdateOperationsInput | boolean
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentAnswerUpdateWithoutScheduledTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnswerUncheckedUpdateWithoutScheduledTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAnswerUncheckedUpdateManyWithoutScheduledTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerText?: StringFieldUpdateOperationsInput | string
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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