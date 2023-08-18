import { Logoimg } from "./styleHeader"
import {ContainerHeader} from './styleHeader'
export default function Header ( ) {
    return(
        <ContainerHeader>
            <div>
                <Logoimg src="/logo.svg" alt="logo"/>
            </div>
            <div>
                <h1>Para Fazer...</h1>
            </div>
            
        </ContainerHeader>
    )
}