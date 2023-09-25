// eslint-disable-next-line @typescript-eslint/no-empty-interface
import { FieldBaseGeneric } from '@ng-template-khan-esdras/shared/utils';
import { Product } from '@ng-template-khan-esdras/logistic/models';

export interface LogisticState {
  fieldsFilter: FieldBaseGeneric<string>[];
  products: Product[];
}
