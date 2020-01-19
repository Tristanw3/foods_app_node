import React from 'react';

import { AccountCard, ItemSection, DateSection, TotalSection } from '../AccountCardStyled';

import { FoodThumbnail } from '../../Food/FoodStyled';

import { OrderBox, AquaContainerHeader } from './OrderItemStyled'

export default (props) => {

    return (
        <OrderBox>
            <AquaContainerHeader>
                <h2>Item</h2>
                <h2>Date</h2>
                <h2>Total</h2>
            </AquaContainerHeader>

            <AccountCard>
                <ItemSection>
                    <FoodThumbnail />
                    <FoodThumbnail />
                </ItemSection>

                <DateSection>21-Dec-2019</DateSection>
                <TotalSection>${props.cost}</TotalSection>
            </AccountCard>
        </OrderBox >
    )

}
