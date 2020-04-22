import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import { Container, Code } from './styles';

export default function Menu() {
    return (
        <Container>
            <Code>
                <QRCode
                    value="https://github.com/wandersonce"
                    size={80}
                    backgroundColor="#FFF"
                />
            </Code>
        </Container>
    )
}