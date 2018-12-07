<?php
/**
 * Created by PhpStorm.
 * User: abid
 * Date: 3/11/18
 * Time: 4:41 PM
 */

class Vonvogel_Vonproducts_IndexController extends Mage_Core_Controller_Front_Action
{

    public function indexAction()
    {

        $this->loadLayout();
        $this->renderLayout();

    }

    public function addAction()
    {


        $params = Mage::app()->getRequest()->getParams();

        Mage::log($params, null, 'params.log');
        //return;
        $cart = Mage::getSingleton('checkout/cart');
        $cart->init();

        foreach ($params as $key => $item) {
            /*switch ($key) {
                case 'cy'://cylinder = DIAL ; VONDIAL = 9
                    $productId = 9;
                    break;
                case 'ca': //case = CASE; VONCASE = 10
                    $productId = 10;
                    break;
                case 'br': //bracelets = STRAP; VONSTRAP =  8
                    $productId = 8;
                    break;
            }*/
            $sku = 'VON' . strtoupper($key);
            $productId = Mage::getModel('catalog/product')->getIdBySku($sku);
            $product = Mage::getModel('catalog/product')->load($productId);
            if (!$product) return;
            //avoid merging or items.
            $product->addCustomOption('article_no', $item['articleNo']);
            $product->addCustomOption('image_url', $item['url']);

            $item['sku'] = strtoupper($item['categoryName'] . "-" . $item['productId']);


            $options = array();

            $paramater = array('product' => $productId,
                'qty' => '1',
                'form_key' => Mage::getSingleton('core/session')->getFormKey(),
                'options' => $options
            );

            $request = new Varien_Object();
            $request->setData($paramater);

            $cart->addProduct($product, $request);

            Mage::getSingleton('core/session')->setData('von_product_params_' . $item['articleNo'], $item);

        }
        $cart->save();
        Mage::getSingleton('checkout/session')->setCartWasUpdated(true);

        $this->_redirect('checkout/cart');

    }
}