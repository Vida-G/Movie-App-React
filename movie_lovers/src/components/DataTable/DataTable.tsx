import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 210
    },
    {
        field: 'genre',
        headerName: 'Genre',
        width: 300
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 110
    },
];

const rows = [
    { id: 1, name: 'The Godfather', genre: 'Drama, Crime', year: '1972' },
    { id: 2, name: 'Life Is Beautiful', genre: 'Comedy, Drama, Romance', year: '1997' },
    { id: 3, name: 'Interstellar', genre: 'Adventure, Drama, Sci-Fi', year: '2014' },
    { id: 4, name: 'The Pianist', genre: 'Biography, Drama, Music', year: '2002' },
    { id: 5, name: 'The Lion King', genre: 'Animation, Adventure, Drama', year: '1994' },
    { id: 6, name: 'Joker', genre: 'Crime, Drama, Thriller', year: '2019' },
    { id: 7, name: 'The Lives of Others', genre: 'Drama, Mystery, Thriller', year: '2006' },
    { id: 8, name: 'A Separation', genre: 'Drama', year: '2011' },
    { id: 9, name: 'Up', genre: 'Animation, Adventure, Comedy', year: '2009' },
    { id: 10, name: 'The Wolf of Wall Street', genre: 'Biography, Comedy, Crime', year: '2013' },
  ];


export const DataTable = () =>{
    return (
        <div style={{ height: 400, width: '100%'}}>
            <h2>Movies</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}