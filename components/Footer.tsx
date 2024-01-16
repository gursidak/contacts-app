// components/Footer.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="body2" align="center" color="textSecondary">
        Number of records: 10{/* Replace with dynamic count */}
      </Typography>
    </Container>
  );
};

export default Footer;
