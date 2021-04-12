import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TriviaTable = ( { trivia, handleClick } ) => {
  

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <h3>CATEGORY</h3>
            </TableCell>
            <TableCell align='center'>
              <h3>QUESTION</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trivia.map((el, index) => {
            const id = Math.floor(Math.random() * 1000 + 1);
            const { category, question} = el;
            return (
              <TableRow key={id}>
                <TableCell align='center'>{category}</TableCell>
                <TableCell align='center'>{question}</TableCell>
                <TableCell align='center'>
                  <button
                    style={{
                      padding: '.5rem',
                      color: 'white',
                      backgroundColor: 'green',
                      letterSpacing: '.2rem',
                    }}
                    onClick={() => handleClick(index)}
                  >
                    ANSWER
                  </button>
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
