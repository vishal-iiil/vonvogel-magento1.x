<?php
/**
 * Created by PhpStorm.
 * User: abid
 * Date: 7/11/18
 * Time: 3:49 PM
 */

class Vonvogel_Vonproducts_Helper_Data extends Mage_Core_Helper_Abstract
{

    public function isModuleEnabled(){
        return Mage::getStoreConfig('vonvogel/vonvogel_group/vonvogel_enable',Mage::app()->getStore());
    }

    public function getKeyId(){
        return Mage::getStoreConfig('vonvogel/vonvogel_group/vonvogel_key',Mage::app()->getStore());
    }

    public function getCountry(){
        return Mage::getStoreConfig('vonvogel/vonvogel_group/vonvogel_country',Mage::app()->getStore());
    }
}

