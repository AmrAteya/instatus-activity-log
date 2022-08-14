import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'ACTOR',
    accessor: 'target_name',
  },
  {
    Header: 'ACTION',
    accessor: 'action.name',
  },
  {
    Header: 'DATE',
    accessor: 'occurred_at',
    format: (value) => format(value, 'MM/dd/yyyy'),
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: 'Actor',
    accessor: 'target_name'
  },
  {
    Header: 'Action',
    accessor: 'action.name',
  },
  {
    Header: 'Date',
    accessor: 'occurred_at',
  }
];
