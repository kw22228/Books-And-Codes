function ReadOnlyRepository<T>(target: ObjectType<T> | EntitySchema<T> | string): Reposiyory<T> {
  return getConnection('ro').getRepository(target);
}

interface useSelectPaginationProps<T> {
  categoryAtom: RecoilState<number>;
  filterAtom: RecoilState<string[]>;
  sortAtom: RecoilState<SortType>;
  fetcherFunc: (props: CommonListRequest) => Promise<DefaultResponse<ContentListResponose<T>>>;
}

type UseRequesterHookType = <RequestData = void, ResponseData = void>(
  baseURL?: string | Headers,
  defaultHeader?: Headers
) => [RequestStatus, Requester<RequestData, ResponseData>];

function useSelectPagination<T extends CardListContent | CommonProductResponse>({
  categoryAtom,
  filterAtom,
  sortAtom,
  fetcherFunc,
}: useSelectPaginationProps<T>): {
  intersectionRef: RefObject<HTMLDivElement>;
  data: T[];
  categoryId: number;
  isLoading: boolean;
  isEmpty: boolean;
} {
  return {
    intersectionRef,
    data: swppedData ?? [],
    isLoading,
    categoryId,
    isEmpty,
  };
}

class LocalDB<T> {
  async put(table: string, row: T): Promise<T> {
    return new Promise<T>((resolved, rejected) => {});
  }

  async get(table: string, key: any): Promise<T> {
    return new Promise<T>((resolved, rejected) => {});
  }
}

class IndexDB implements ICacheStore {
  private _DB?: LocalDB<{
    key: string;
    value: Promise<Record<string, unknown>>;
  }>;

  private DB() {
    if (!this._DB) {
      this._DB = new LocalDB('localCache', {
        var: 6,
        tables: [{ name: TABLE_NAME, keyPath: 'key' }],
      });
    }

    return this._DB;
  }
}

/**
 * 제한된 제네릭
 * 타입 매개변수에 대해 제약 조건을 설정
 */
type ErrorRecord<Key extends string> = Exclude<Key, ErrorCodeType> extends never
  ? Partial<Record<Key, boolean>>
  : never;

function useSelectPagination2<T extends CardListContent | CommonProductResponse>({
  filterAtom,
  sortAtom,
  fetcherFunc,
}: useSelectPaginationProps<T>): {
  intersectionRef: RefObject<HTMLDivElement>;
  data: T[];
  categoryId: number;
  isLoading: boolean;
  isEmpty: boolean;
} {}
const { intersectionRef, data, isLoading, isEmpty } = useSelectPagination2<CardListContent>({
  categoryAtom: replyCardCategoryIdAtom,
  filterAtom: replyCardFilterAtom,
  sortAtom: replyCardSortAtom,
  fetcherFunc: fetchReplyCardListByThemeGroup,
});

/**
 * 확장된 제네릭
 */
class APIResponse<Ok, Err = string> {
  private readonly data: Ok | Err | null;
  private readonly status: ResponseStatus;
  private readonly statusCode: number | null;

  constructor(data: Ok | Err | null, statusCode: number | null, status: ResponseStatus) {
    this.data = data;
    this.status = status;
    this.statusCode = statusCode;
  }

  public static Success<T, E = string>(data: T): APIResponse<T, E> {
    return new this<T, E>(data, 200, ResponseStatus.SUCCESS);
  }

  public static Error<T, E = unknown>(init: AxiosError): APIResponse<T, E> {
    if (!init.response) {
      return new this<T, E>(null, null, ResponseStatus.CLIENT_ERROR);
    }

    if (!init.response.data?.result) {
      return new this<T, E>(null, init.response.status, ResponseStatus.SERVER_ERROR);
    }

    return new this<T, E>(init.response.data.result, init.response.status, ResponseStatus.FAILURE);
  }
}
const fetchShopStatus = async (): Promise<APIResponse<IShopResponse | null>> => {
  return (await API.get<IShopResponse | null>('/v1/main/shop', config)).map((it) => it.result);
};

/**
 * 제네릭 사용 예시
 * 코드의 가독성을 높이고 코드 재사용성을 높인다.
 */
interface MobileApiResponse<Data> {
  data: Data;
  statusCode: string;
  statusMessge?: string;
}

const fetchPriceInfo = (): Promise<MobileApiResponse<PriceInfo>> => {
  const priceUrl = 'https:~~~';

  return request({
    method: 'GET',
    url: priceUrl,
  });
};
const fetchOrderInfo = (): Promise<MobileApiResponse<Order>> => {
  const orderUrl = 'https:~~~';

  return request({
    method: 'GET',
    url: orderUrl,
  });
};

/**
 * 제네릭을 사용하지 않아도 되는 예시
 * 제네릭이 필요없는데 굳이 제네릭을 사용하면, 코드 길이만 늘어나고 가독성을 해칠 수 있다.
 */
type GType<T> = T;
type RequirementType = 'USE' | 'UN_USE' | 'NON_SELECT';
interface Order {
  getRequirement(): GType<RequirementType>;
}

/**
 * any 사용하기
 * any를 사용하면 제네릭을 포함해 타입을 지정하는 의미가 사라진다.
 */
type ReturnType<T = any> = {};

/**
 * 가독성을 고려하지 않은 사용
 * 제네릭을 과하게 사용하면 가독성을 해친다.
 * 복잡한 제네릭은 의미 단위로 분할해서 사용하자 !
 */
// ReturnType<Record<OrderType, Partial<Record<CommonOrderStatus | CommonReturnStatus, Partial<Record<OrderRoleType, string[]>>>>>>;
type CommonStatus = CommonOrderStatus | CommonReturnStatus;
type PartialOrderRole = Partial<Record<OrderRoleType, string[]>>;
type RecordCommonOrder = Record<CommonStatus, PartialOrderRole>;
type RecordOrder = Record<OrderType, Partial<RecordCommonOrder>>;
ReturnType<RecordOrder>;
export {};
