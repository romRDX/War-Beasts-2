
import { CharacterProvider } from './ChosenCharacterProvider';
import { CharactersListProvider } from './CharactersListProvider';
import { SelectedMapProvider } from './SelectedMapProvider';

const AppProvider = ({ children }) => (
    <CharactersListProvider>
    <CharacterProvider>
    <SelectedMapProvider>
        { children }
    </SelectedMapProvider>
    </CharacterProvider>
    </CharactersListProvider>
);

export default AppProvider;