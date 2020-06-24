import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function Library ({ title, elements, Item }) {
    return (
        <Box>
            <h2>{title}</h2>
            <Grid container spacing={4} alignItems="center" justify="space-around">
                {elements.map((element) => (
                <Grid item key={element.id} xs={12} sm={6} md={4} lg={3} xl={3} zeroMinWidth>
                    <Item key={element.id} element={element} />
                </Grid>
                ))}
            </Grid>
        </Box>
    );
}

Library.propTypes = {
    title: PropTypes.string,
    elements: PropTypes.array.isRequired,
    Item: PropTypes.func.isRequired
};
export default Library;
