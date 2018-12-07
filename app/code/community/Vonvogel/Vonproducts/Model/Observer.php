<?php
/**
 * Created by PhpStorm.
 * User: abid
 * Date: 3/11/18
 * Time: 5:02 PM
 */

class Vonvogel_Vonproducts_Model_Observer
{
    public function salesQuoteItemSetProduct(Varien_Event_Observer $observer)
    {

        $von_products = array(
            'VONBR',
            'VONCY',
            'VONCA'
        );
        $cache_params = null;
        /*Mage::log('NAME: '. $params['name'], null, 'mylogfile.log');*/

        $item = $observer->getQuoteItem();

        if (in_array($item->getSku(), $von_products)) {

            //$item_id = $item->getProductId();

            $customOption = $item->getOptionByCode('article_no');
            $cache_params = Mage::getSingleton('core/session')->getData('von_product_params_' . $customOption->getValue());

            if (!$cache_params) return;
            $item->setName($cache_params['description']);
            $item->setPrice($cache_params['price']);
            $item->setOriginalCustomPrice($cache_params['price']);
            $item->setSku($cache_params['sku']);
            $item->getQuote()->save();
        }

        return $this;
    }



}