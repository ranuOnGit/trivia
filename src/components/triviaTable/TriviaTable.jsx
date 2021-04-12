import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TriviaTable = ( { trivia } ) => {  

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  } );
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <h2 style={{ letterSpacing: '.2rem' }}>CATEGORY</h2>
            </TableCell>
            <TableCell align='center'>
              <h2 style={{ letterSpacing: '.2rem' }}>QUESTION</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trivia.map((el, index) => {
            const id = Math.floor(Math.random() * 1000 + 1);
            const { category, question, correct_answer } = el;
            return (
              <TableRow key={id}>
                <TableCell align='center' style={{ letterSpacing: '.1rem' }}>
                  <h3>{category}</h3>
                </TableCell>
                <TableCell
                  align='center'
                  style={{ color: 'red', letterSpacing: '.1rem' }}
                >
                  <h3>{question}</h3>
                </TableCell>
                <TableCell align='center'>
                  <select
                    style={{
                      padding: '.5rem',
                      color: 'white',
                      backgroundColor: 'green',
                      letterSpacing: '.1rem',
                    }}
                  >
                    <option>ANSWER</option>
                    <option>{correct_answer}</option>
                  </select>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TriviaTable;
