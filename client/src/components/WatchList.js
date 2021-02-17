import {Container, Table, Button, ListGroupItem, ListGroup} from 'reactstrap';
const WatchList = () => {
    return (
        <div>

            <Container dark>
                <h1>Your Watchlist</h1>
                <Table dark>
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Date Aired</th>
                            <th>Episodes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    
                </Table>

            </Container>
        </div>
    )
}

export default WatchList
