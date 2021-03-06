import * as React from 'react';
import {
  Persona,
  PersonaSize,
} from 'office-ui-fabric-react/lib/Persona';
import './PersonaExample.scss';

export class UnknownPersonaExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className='ms-PersonaExample'>
        <Persona
          showUnknownPersonaCoin={true}
          primaryText='Maor Sharett'
          secondaryText='Designer'
          size={PersonaSize.size40}
        />

        <Persona
          showUnknownPersonaCoin={true}
          primaryText='Kat Larrson'
          secondaryText='Designer'
          tertiaryText='Unverified sender'
          size={PersonaSize.size72}
        />
      </div>
    );
  }
}
