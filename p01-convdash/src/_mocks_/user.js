import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['V', 'X']),
  role: sample([
    'Генеральный директор',
    'Инженер',
    'Бухгалтер',
    'Технический директор',
    'Слесарь',
    'Менеджер проекта',
    'Аудитор',
    'Начальник СБ',
    'Оператор',
    'Механик'
  ])
}));

export default users;
