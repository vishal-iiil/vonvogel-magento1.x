<?php
/**
 * Created by PhpStorm.
 * User: abid
 * Date: 7/11/18
 * Time: 4:53 PM
 */
class Von_Vonproducts_Model_Countries
{
    /**
     * Provide available options as a value/label array
     *
     * @return array
     */
    public function toOptionArray()
    {
        return array(
            array('value'=>'USA', 'label'=>'USA'),
            array('value'=>'HKG', 'label'=>'Hong Kong'),
            array('value'=>'CAN', 'label'=>'Canada'),
            array('value'=>'SWZ', 'label'=>'Switzerland')
        );
    }
}