import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import Board from '../Board';

test('should render square inside board', () => {
    const xIsNext = true;
    const currentSquares = [Array(9).fill('X')];
    
    render(<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />)
    const boardElement = screen.getByTestId('board-id-1');

    expect(boardElement).toBeInTheDocument();
    expect(boardElement).toHaveTextContent('X');
})

function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
}