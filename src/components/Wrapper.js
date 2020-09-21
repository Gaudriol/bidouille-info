import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

export const Wrapper = styled('div')`
  height: 100%;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 200px;

  overflow: hidden;
  
  ${tablet} {
    width: 96%;
}`;