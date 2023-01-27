import { describe, it, expect } from 'vitest';
import {render} from "@testing-library/react";
import App from "./App";


describe('something truthy and falsy', () => {
    it('true to be true', () => {
        const AppComp = render(<App/>)
        AppComp.getByTestId('counter-button')
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});